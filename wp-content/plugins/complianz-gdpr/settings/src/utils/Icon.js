// import Tooltip from '@mui/material/Tooltip';
// import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
const IconHtml = React.forwardRef(function IconHtml(props, ref){
	const {name, color, size} = props;
	const iconColors = {
		'black': 'var(--rsp-black)',
		'green': 'var(--rsp-green)',
		'blue': 'var(--rsp-blue)',
		'dark-blue': 'var(--rsp-dark-blue)',
		'yellow': 'var(--rsp-yellow)',
		'orange': 'var(--rsp-orange)',
		'red': 'var(--rsp-red)',
		'grey': 'var(--rsp-grey-400)',
	};
	let renderedIcon = '';

	if (name === 'bullet') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"/>
				</svg>

	}

	if (name === 'circle') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
				</svg>

	}

	if (name === 'check') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
				</svg>

	}

	if (name === 'indeterminate') {
		renderedIcon =
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={size}>
			<path fill={iconColors[color]} d="M0 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"/></svg>

	}

	if (name === 'warning') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/>
				</svg>

	}
	if (name === 'error') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"/>
				</svg>

	}

	if (name === 'times') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
				</svg>

	}

	if (name === 'success') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
					 viewBox="0 0 448 512" height={size}>
					<path fill={iconColors[color]}
						  d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
				</svg>
	}

	if (name === 'circle-check') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/>
				</svg>

	}

	if (name === 'circle-times') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/>
				</svg>

	}

	if (name === 'chevron-up') {
		renderedIcon = <svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"/>
				</svg>
	}

	if (name === 'chevron-down') {
		renderedIcon = <svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/>
				</svg>}

	if (name === 'chevron-right') {
		renderedIcon = <svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/>
				</svg>
	}

	if (name === 'upload') {
		renderedIcon = <svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M272 54.6V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V54.6L139.3 155.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0l128 128c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L272 54.6zM208 352H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H304V320H448c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V384c0-35.3 28.7-64 64-64H208v32zm176 64a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
				</svg>
	}

	if (name === 'circle-chevron-right') {
		renderedIcon =
				<svg
					aria-hidden="true" focusable="false" role="img"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					height={size}>
					<path fill={iconColors[color]}
						  d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm345 17l17-17-17-17L241 135l-17-17L190.1 152l17 17 87 87-87 87-17 17L224 393.9l17-17L345 273z"/>
				</svg>
	}

	if (name === 'dial-high-light') {
		renderedIcon =
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 248H415c-7.9 63.1-61.7 112-127 112c-70.7 0-128-57.3-128-128s57.3-128 128-128c65.3 0 119.1 48.9 127 112H288c-8.8 0-16 7.2-16 16s7.2 16 16 16zm160-16a160 160 0 1 0 -320 0 160 160 0 1 0 320 0zm120 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 96A24 24 0 1 0 72 96a24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 480a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
				</svg>
	}

	if (name === 'dial-light') {
		renderedIcon =
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm11.3 243.3l89.8-89.8c39.1 50.2 35.5 122.9-10.6 169c-50 50-131 50-181 0s-50-131 0-181c46.2-46.2 118.8-49.7 169-10.6l-89.8 89.8c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zM401.1 174.9A160 160 0 1 0 174.9 401.1 160 160 0 1 0 401.1 174.9zM568 288a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 96A24 24 0 1 0 72 96a24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 480a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
				</svg>
	}
	if (name === 'dial-low-light') {
		renderedIcon =
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 360c-65.3 0-119.1-48.9-127-112H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H161c7.9-63.1 61.7-112 127-112c70.7 0 128 57.3 128 128s-57.3 128-128 128zM128 288a160 160 0 1 0 320 0 160 160 0 1 0 -320 0zm440 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 96A24 24 0 1 0 72 96a24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 480a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
				</svg>
	}
	if (name === 'dial-max-light') {
		renderedIcon =
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm90.5 322.5l-.4 .4 .8-.8-.4 .4zM299.3 276.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l89.8 89.8c-50.2 39.1-122.8 35.5-169-10.6c-50-50-50-131 0-181s131-50 181 0c46.2 46.2 49.7 118.8 10.6 169l-89.8-89.8zM401.1 401.1A160 160 0 1 0 174.9 174.9 160 160 0 1 0 401.1 401.1zM568 288a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 96A24 24 0 1 0 72 96a24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 480a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
				</svg>
	}

	if (name === 'dial-med-light') {
		renderedIcon =
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm16 232V161c63.1 7.9 112 61.7 112 127c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-65.3 48.9-119.1 112-127V288c0 8.8 7.2 16 16 16s16-7.2 16-16zM288 128a160 160 0 1 0 0 320 160 160 0 1 0 0-320zM568 288a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 96A24 24 0 1 0 72 96a24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 480a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
				</svg>

	}

	if (name === 'dial-med-low-light') {
		renderedIcon =
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM197.5 378.5c-46.2-46.2-49.7-118.8-10.6-169l89.8 89.8c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-89.8-89.8c50.2-39.1 122.9-35.5 169 10.6c50 50 50 131 0 181s-131 50-181 0zM174.9 174.9A160 160 0 1 0 401.1 401.1 160 160 0 1 0 174.9 174.9zM568 288a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 96A24 24 0 1 0 72 96a24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 480a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
				</svg>

	}

	if (name === 'dial-min-light') {
		renderedIcon =
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM276.7 276.7l-89.8 89.8c-39.1-50.2-35.5-122.9 10.6-169c50-50 131-50 181 0s50 131 0 181c-46.2 46.2-118.8 49.7-169 10.6l89.8-89.8c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0zM174.9 401.1A160 160 0 1 0 401.1 174.9 160 160 0 1 0 174.9 401.1zM568 288a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 96A24 24 0 1 0 72 96a24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 480a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
				</svg>

	}

	if (name === 'dial-off-light') {
		renderedIcon =
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM272 288V415c-63.1-7.9-112-61.7-112-127c0-70.7 57.3-128 128-128s128 57.3 128 128c0 65.3-48.9 119.1-112 127V288c0-8.8-7.2-16-16-16s-16 7.2-16 16zm16 160a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM568 288a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 96A24 24 0 1 0 72 96a24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 480a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
				</svg>

	}

	if (name === 'chevron-left') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/>
				</svg>

	}

	if (name === 'plus') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
				</svg>

	}

	if (name === 'minus') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
				</svg>

	}

	if (name === 'plugin') {
		renderedIcon =
			<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
					 height={size}>
				<path fill={iconColors[color]}
						d="M128 24c0-13.3-10.7-24-24-24S80 10.7 80 24v88h48V24zm176 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v88h48V24zM24 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v64c0 80.2 59 146.6 136 158.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24V414.2c77-11.6 136-78 136-158.2V192h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8H304 80 32 24zM192 368c-61.9 0-112-50.1-112-112V192H304v64c0 61.9-50.1 112-112 112z"/>
			</svg>
	}

	if (name === 'services') {
		renderedIcon =
			<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
					 height={size}>
				<path fill={iconColors[color]}
					d="M410.8 134.2c-19.3 8.6-42 3.5-55.9-12.5C332.8 96.1 300.3 80 264 80c-66.3 0-120 53.7-120 120c0 0 0 0 0 0s0 0 0 0l0 .2c0 20.4-12.8 38.5-32 45.3C74.6 258.7 48 294.3 48 336c0 53 43 96 96 96H504h3.3c.6-.1 1.3-.1 1.9-.2c46.2-2.7 82.8-41 82.8-87.8c0-36-21.6-67.1-52.8-80.7c-20.1-8.8-31.6-30-28.1-51.7c.6-3.8 .9-7.7 .9-11.7c0-39.8-32.2-72-72-72c-10.5 0-20.4 2.2-29.2 6.2zM512 479.8v.2h-8H464 144C64.5 480 0 415.5 0 336c0-62.7 40.1-116 96-135.8l0-.2c0-92.8 75.2-168 168-168c50.9 0 96.4 22.6 127.3 58.3C406.2 83.7 422.6 80 440 80c66.3 0 120 53.7 120 120c0 6.6-.5 13-1.5 19.3c48 21 81.5 68.9 81.5 124.7c0 72.4-56.6 131.6-128 135.8z"/>
			</svg>
	}



	if (name === 'sync') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h28.045c6.353 0 11.613-4.952 11.973-11.294C66.161 141.649 151.453 60 256 60c54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486zM491.699 256h-28.045c-6.353 0-11.613 4.952-11.973 11.294C445.839 370.351 360.547 452 256 452c-54.163 0-103.157-21.923-138.614-57.386l54.128-54.129c7.56-7.56 2.206-20.485-8.485-20.485H20c-6.627 0-12 5.373-12 12v143.029c0 10.691 12.926 16.045 20.485 8.485L80.65 431.35C125.525 476.233 187.516 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507z"></path>
				</svg>

	}

	if (name === 'sync-error') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M256 79.1C178.5 79.1 112.7 130.1 89.2 199.7C84.96 212.2 71.34 218.1 58.79 214.7C46.23 210.5 39.48 196.9 43.72 184.3C73.6 95.8 157.3 32 256 32C337.5 32 408.8 75.53 448 140.6V104C448 90.75 458.7 80 472 80C485.3 80 496 90.75 496 104V200C496 213.3 485.3 224 472 224H376C362.7 224 352 213.3 352 200C352 186.7 362.7 176 376 176H412.8C383.7 118.1 324.4 80 256 80V79.1zM280 263.1C280 277.3 269.3 287.1 256 287.1C242.7 287.1 232 277.3 232 263.1V151.1C232 138.7 242.7 127.1 256 127.1C269.3 127.1 280 138.7 280 151.1V263.1zM224 352C224 334.3 238.3 319.1 256 319.1C273.7 319.1 288 334.3 288 352C288 369.7 273.7 384 256 384C238.3 384 224 369.7 224 352zM40 432C26.75 432 16 421.3 16 408V311.1C16 298.7 26.75 287.1 40 287.1H136C149.3 287.1 160 298.7 160 311.1C160 325.3 149.3 336 136 336H99.19C128.3 393 187.6 432 256 432C333.5 432 399.3 381.9 422.8 312.3C427 299.8 440.7 293 453.2 297.3C465.8 301.5 472.5 315.1 468.3 327.7C438.4 416.2 354.7 480 256 480C174.5 480 103.2 436.5 64 371.4V408C64 421.3 53.25 432 40 432V432z"/>
				</svg>

	}

	if (name === 'shortcode') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M128 32H32C14.4 32 0 46.4 0 64v384c0 17.6 14.4 32 32 32h96C145.7 480 160 465.7 160 448S145.7 416 128 416H64V96h64C145.7 96 160 81.67 160 64S145.7 32 128 32zM416 32h-96C302.3 32 288 46.33 288 63.1S302.3 96 319.1 96H384v320h-64C302.3 416 288 430.3 288 447.1S302.3 480 319.1 480H416c17.6 0 32-14.4 32-32V64C448 46.4 433.6 32 416 32z"/>
				</svg>

	}

	if (name === 'file') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z"/>
				</svg>

	}

	if (name === 'file-disabled') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M639.1 487.1c0-7.119-3.153-14.16-9.191-18.89l-118.8-93.12l.0013-237.3c0-16.97-6.742-33.26-18.74-45.26l-74.63-74.64C406.6 6.742 390.3 0 373.4 0H192C156.7 0 128 28.65 128 64L128 75.01L38.82 5.11C34.41 1.672 29.19 0 24.04 0C10.19 0-.0002 11.3-.0002 23.1c0 7.12 3.153 14.16 9.192 18.89l591.1 463.1C605.6 510.3 610.8 512 615.1 512C629.8 512 639.1 500.6 639.1 487.1zM464 338.4l-287.1-225.7l-.002-48.51c0-8.836 7.164-16 15.1-16h160l-.0065 79.87c0 17.67 14.33 31.1 31.1 31.1L464 159.1V338.4zM448 463.1H192c-8.834 0-15.1-7.164-15.1-16L176 234.6L128 197L128 447.1c0 35.34 28.65 64 63.1 64H448c20.4 0 38.45-9.851 50.19-24.84l-37.72-29.56C457.5 461.4 453.2 463.1 448 463.1z"/>
				</svg>

	}

	if (name === 'file-download') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
					 viewBox="0 0 448 512" height={size}>
					<path fill={iconColors[color]}
						  d="M235.3 347.3L224 358.6l-11.3-11.3-128-128L73.4 208 96 185.4l11.3 11.3L208 297.4V16 0h32V16 297.4L340.7 196.7 352 185.4 374.6 208l-11.3 11.3-128 128zM32 336V480H416V336 320h32v16V496v16H432 16 0V496 336 320H32v16z"/>
				</svg>

	}

	if (name === 'calendar') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"/>
				</svg>

	}

	if (name === 'calendar-error') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M151.1 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V192H47.1V448C47.1 456.8 55.16 464 63.1 464H284.5C296.7 482.8 312.5 499.1 330.8 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24L151.1 64zM576 368C576 447.5 511.5 512 432 512C352.5 512 287.1 447.5 287.1 368C287.1 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 416C418.7 416 408 426.7 408 440C408 453.3 418.7 464 432 464C445.3 464 456 453.3 456 440C456 426.7 445.3 416 432 416zM447.1 288C447.1 279.2 440.8 272 431.1 272C423.2 272 415.1 279.2 415.1 288V368C415.1 376.8 423.2 384 431.1 384C440.8 384 447.1 376.8 447.1 368V288z"/>
				</svg>

	}

	if (name === 'rotate') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M447.1 272.2c-8.766-1.562-16.97 4.406-18.42 13.12C415.3 370.3 342.3 432 255.1 432c-49.96 0-95.99-21.56-128.5-56.8l59.88-59.88C191.9 310.8 193.3 303.8 190.8 297.9C188.3 291.9 182.5 288 176 288h-128C39.16 288 32 295.2 32 304v128c0 6.469 3.891 12.31 9.875 14.78C43.86 447.6 45.94 448 48 448c4.156 0 8.25-1.625 11.31-4.688l45.6-45.6C143.3 438.9 197.4 464 256 464c101.1 0 188.3-72.91 205.1-173.3C462.6 281.9 456.7 273.7 447.1 272.2zM64 393.4V320h73.38L64 393.4zM470.1 65.22C468.1 64.41 466.1 64 464 64c-4.156 0-8.25 1.625-11.31 4.688l-45.6 45.6C368.7 73.15 314.6 48 256 48c-102 0-188.3 72.91-205.1 173.3C49.42 230.1 55.3 238.3 64.02 239.8c8.766 1.562 16.97-4.406 18.42-13.12C96.69 141.7 169.7 80 256 80c49.96 0 96.02 21.56 128.6 56.8l-59.88 59.88c-4.578 4.562-5.953 11.47-3.469 17.44C323.7 220.1 329.5 224 336 224h128C472.8 224 480 216.8 480 208v-128C480 73.53 476.1 67.69 470.1 65.22zM448 192h-73.38L448 118.6V192z"/>
				</svg>

	}

	if (name === 'rotate-error') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M387.5 133.1C352.3 90.9 299.3 64 240 64C149.2 64 73.1 127 53.1 211.7c-2 8.6-10.6 13.9-19.2 11.9s-13.9-10.6-11.9-19.2C45.3 105.5 134.1 32 240 32c69.2 0 131 31.4 172.1 80.6L448 154.9V96c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h55.9l-36.3-42.8 0 0-.1-.1zM256 144V272c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16zM240 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM16 432c-8.8 0-16-7.2-16-16V320c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H56.1l36.3 42.8 0 0 .1 .1C127.7 421.1 180.7 448 240 448c90.8 0 166.9-63 186.9-147.7c2-8.6 10.7-13.9 19.3-11.9s13.9 10.6 11.9 19.2C434.7 406.5 345.9 480 240 480c-69.2 0-131-31.4-172.1-80.6L32 357.1V416c0 8.8-7.2 16-16 16z"/>
				</svg>
	}

	if (name === 'help') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"/>
				</svg>
	}

	if (name === 'copy') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"/>
				</svg>

	}

	if (name === 'info') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/>
				</svg>
	}

	if (name === 'list') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M184.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM256 96c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zM192 416c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zM80 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"/>
				</svg>

	}

	if (name === 'external-link') {
		renderedIcon =
				<svg aria-hidden="true" focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M304 24c0 13.3 10.7 24 24 24H430.1L207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l223-223V184c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V440c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"/>
				</svg>

	}

	if (name === 'loading') {
		renderedIcon =
				<svg xmlns="http://www.w3.org/2000/svg"
					 focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"/>
				</svg>

	}

	if (name === 'linked') {
		renderedIcon =
				<svg xmlns="http://www.w3.org/2000/svg"
					 focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M580.3 267.2c56.2-56.2 56.2-147.3 0-203.5C526.8 10.2 440.9 7.3 383.9 57.2l-6.1 5.4c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l6.1-5.4c38-33.2 95.2-31.3 130.9 4.4c37.4 37.4 37.4 98.1 0 135.6L433.1 346.6c-37.4 37.4-98.2 37.4-135.6 0c-35.7-35.7-37.6-92.9-4.4-130.9l4.7-5.4c8.7-10 7.7-25.1-2.3-33.9s-25.1-7.7-33.9 2.3l-4.7 5.4c-49.8 57-46.9 142.9 6.6 196.4c56.2 56.2 147.3 56.2 203.5 0L580.3 267.2zM59.7 244.8C3.5 301 3.5 392.1 59.7 448.2c53.6 53.6 139.5 56.4 196.5 6.5l6.1-5.4c10-8.7 11-23.9 2.3-33.9s-23.9-11-33.9-2.3l-6.1 5.4c-38 33.2-95.2 31.3-130.9-4.4c-37.4-37.4-37.4-98.1 0-135.6L207 165.4c37.4-37.4 98.1-37.4 135.6 0c35.7 35.7 37.6 92.9 4.4 130.9l-5.4 6.1c-8.7 10-7.7 25.1 2.3 33.9s25.1 7.7 33.9-2.3l5.4-6.1c49.9-57 47-142.9-6.5-196.5c-56.2-56.2-147.3-56.2-203.5 0L59.7 244.8z"/>
				</svg>

	}

	if (name === 'unlinked') {
		renderedIcon =
				<svg xmlns="http://www.w3.org/2000/svg"
					 focusable="false" role="img"
					 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
					 height={size}>
					<path fill={iconColors[color]}
						  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l91-91c56.2-56.2 56.2-147.3 0-203.5C526.8 10.2 440.9 7.3 383.9 57.2l-6.1 5.4c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l6.1-5.4c38-33.2 95.2-31.3 130.9 4.4c37.4 37.4 37.4 98.1 0 135.6l-95.1 95.1-45.5-35.7c24.2-53.3 14.1-117.9-29.3-161.3c-52.1-52.1-134.4-55.9-190.8-11.2L38.8 5.1zm186.3 146c36.9-22.3 85.6-17.6 117.4 14.3c26 26 34 63.3 23.7 96.4L225.1 151.1zM406.9 416.6l-54.2-42.7c-20.2-2.7-39.7-11.7-55.2-27.3c-9.8-9.8-17-21.2-21.7-33.3l-54.2-42.7c-2.2 39.6 11.9 79.9 41.9 109.9c38.8 38.8 94.2 50.8 143.4 36zM116.6 187.9L59.7 244.8C3.5 301 3.5 392.1 59.7 448.2c53.6 53.6 139.5 56.4 196.5 6.5l6.1-5.4c10-8.7 11-23.9 2.3-33.9s-23.9-11-33.9-2.3l-6.1 5.4c-38 33.2-95.2 31.3-130.9-4.4c-37.4-37.4-37.4-98.1 0-135.6l60.9-60.9-38-29.9z"/>
				</svg>
	}

	return (
		<div {...props} ref={ref}>{renderedIcon}</div>
	)
});

const Icon = ({name, color, size, tooltip}) => {
	// set defaults if not set
	const iconName = name || 'bullet';
	const iconColor = color || 'black';

	let iconSize = size || 15;
	//FormFileupoad component forces size=24. Override that here.
	if (iconName === 'upload') {
		iconSize = 15;
	}

	let tooltipClass = tooltip ? 'tooltip-' : '';
	let randomId= Math.floor(Math.random() * 1000000000);
	if ( tooltip ) {
		return (
			<div className={'cmplz-' + tooltipClass + 'icon cmplz-icon-' + iconName + ' cmplz-' + iconColor}>
				<IconHtml name={iconName} color={iconColor} size={iconSize} id={randomId} className={"cmplz-"+randomId} data-tooltip-delay-hide={200}/>
				<Tooltip place="bottom" anchorSelect={".cmplz-"+randomId} content={tooltip} />
			</div>
		);
	}

	return (
		<div className={'cmplz-' + tooltipClass + 'icon cmplz-icon-' + iconName + ' cmplz-' + iconColor}>
			<IconHtml name={iconName} color={iconColor} size={iconSize} />
		</div>
	);
}
export default Icon;
