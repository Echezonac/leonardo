import toowerPng from '../assets/images/tower-lg.png'
const HeroPage = () => {
  return (
 <section className="col-12 hero_page">
      <div className="row">
        <div className="col-lg-8 col-md-6 d-flex align-items-center justify-content-center px-4 hero-content">
            <div className="hero-content px-5">
                <h1 className='d-lg-block d-md-none lg-txt d-sm-none'>
                   A convergence of <br /> Art, Architecture <br />  and Affluence
                </h1>
                <h1 className='d-lg-none d-md-block d-sm-block'>
                   A convergence of  Art, Architecture  and Affluence
                </h1>
                <p>
                   Eu qui eiusmod in et et eiusmod elit. Exercitation cillum ipsum exercitation officia ut ad proident. Duis pariatur labore excepteur excepteur nisi nulla id do do laboris ut Lorem velit aute.
                </p>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 hero-img">
            <img src={toowerPng} alt="leonardo_tower" className='img-fluid mx-auto d-block' />
        </div>
      </div>
    </section>
  )
}

export default HeroPage
