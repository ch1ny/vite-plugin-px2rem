import * as cssTree from 'css-tree';
import type { Plugin } from 'vite';

const StyleFileSuffixRegex = new RegExp(/(?!\/node_modules\/)(.+)\.(css|less|scss|sass)$/);

interface Px2RemParams {
	/**
	 * 设计稿宽度，默认为 750
	 * 
	 * The page width on your design draft. (DEFAULT: 750)
	 */
	width?: number;
}

export default function px2rem(params?: Px2RemParams): Plugin {
	const { width: designWidth = 750 } = params || {};

	return {
		name: 'px2rem',
		transform(code, id) {
			try {
				if (StyleFileSuffixRegex.test(id)) {
					const tree = cssTree.parse(code) as cssTree.StyleSheet;

					cssTree.walk(tree, {
						enter(node: any) {
							if (node.unit === 'px') {
								node.value = `${Number(node.value) / 100}`;
								node.unit = 'rem';
							}
						},
					});

					return {
						code: cssTree.generate(tree),
					};
				}
			} catch (ex) {
				console.log(ex);
			}

			return {
				code,
			};
		},
		transformIndexHtml() {
			return [
				{
					tag: 'script',
					attrs: {
						type: 'text/javascript',
					},
					children: `
window.addEventListener('load', function () {
  var windowResizeEventKey;
  if (window['onorientationchange']) {
    windowResizeEventKey = 'orientationchange';
  } else {
    windowResizeEventKey = 'resize';
  };

  function rem() {
    var remPx = window.innerWidth * 100 / ${designWidth};
    document.documentElement.style.fontSize = remPx + 'px';
    
    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerText = 'body * {font-size: ' + remPx * 0.16 + 'px;};';
    document.head.appendChild(style);
  }

  window.addEventListener(windowResizeEventKey, rem, false);
  rem();
});
`,
					injectTo: 'body',
				},
			];
		},
	};
}
