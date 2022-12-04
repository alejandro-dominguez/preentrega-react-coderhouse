import footerLogo from '../../assets/logo-footer.svg';
import personalLogo from '../../assets/logo-A.D.svg';

const Footer = () => {
	const scrollTop = () => {
		window.scrollTo(0, 0)
	}

	return (
		<footer className="w-full bg-slate-900 text-slate-50 flex justify-between items-center px-12 py-4">
			<div className='flex items-center gap-4'>
				<a href="https://github.com/alejandro-dominguez" target="_blank" rel="noreferrer">
					<div className='w-20'>
						<img loading="lazy" src={personalLogo} alt="logo Alejandro Dominguez"
						className='block w-full' />
					</div>
				</a>
				<p>&#9400;&nbsp;2022 Alejandro Dominguez</p>
			</div>
			<div className='w-56 cursor-pointer' onClick={() => scrollTop()}>
				<img loading="lazy" src={footerLogo} alt="Geekommerce logo" className='w-full block' />
			</div>
		</footer>
	)
}

export default Footer;