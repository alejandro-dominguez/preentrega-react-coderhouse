import footerLogo from '../../assets/logo-footer.svg';
import personalLogo from '../../assets/logo-A.D.svg';

const Footer = () => {
	const scrollTop = () => {
		window.scrollTo(0, 0)
	}

	return (
		<footer className="w-full bg-slate-900 text-slate-50 flex flex-col md:flex-row justify-between
		items-center px-12 py-4">
			<div className='flex flex-col-reverse md:flex-row items-center gap-4 mt-1 md:mt-0'>
				<a href="https://github.com/alejandro-dominguez" target="_blank" rel="noreferrer">
					<div className='w-20'>
						<img loading="lazy" src={personalLogo} alt="logo Alejandro Dominguez"
						className='block w-full' />
					</div>
				</a>
				<p className='text-center'>&#9400;&nbsp;2022 Alejandro Dominguez</p>
			</div>
			<div className='w-56 cursor-pointer mt-5 mb-2 md:mb-0 md:mt-0' onClick={() => scrollTop()}>
				<img loading="lazy" src={footerLogo} alt="Geekommerce logo" className='w-full block' />
			</div>
		</footer>
	)
}

export default Footer;