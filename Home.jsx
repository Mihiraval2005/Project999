
import React from 'react'
import OIP from './OIP.jpeg'
import Car1 from './Car1.jpeg'
import Car2 from './Car2.png'
import Car3 from './Car3.jpg'
import Car4 from './Car4.jpg'
import Car5 from './Car5.jpg'
import Car6 from './Car6.jpg'
import Car7 from './Car7.jpg'
import Car8 from './Car8.jpg'
import Car9 from './Car9.jpeg'
import Car10 from './Car10.jpeg'
import Car11 from './Caar11.jpeg'
import './Home.css'

function Home() {

  const m1="Automobiles Ettore Bugatti was a German then French manufacturer of high-performance automobiles. The company was founded in 1909 in the then-German city of Molsheim, Alsace, by the Italian-born industrial designer Ettore Bugatti. The cars were known for their design beauty and their many race victories. Famous Bugatti automobiles include .";
  const m2="The first multi-brand approved used car programme is launching in the UK with Stellantis, the OEM group created by the merger of PSA and FCA. Named SPOTiCAR, from this week it allows consumers to reserve, from home, approved used cars from the Vauxhall, Peugeot, Citroen and DS Automobiles brands, from a stock listing of more than 12,000 vehicles.";
  const m3="The price of Mahindra Scorpio, a 7 seater SUV, ranges from Rs. 13.25 - 17.06 Lakh. It is available in 4 variants, with an engine of 2184 cc and a choice of 1 transmission: Manual. Scorpio comes with 2 airbags. Mahindra Scorpio has a ground clearance of 209 mm and is available in 5 colours. Users have reported a mileage of 15.19 kmpl for Scorpio.";
  const m4="The Toyota Fortuner, also known as the Toyota SW4, is a mid-size SUV manufactured by the Japanese automaker Toyota since 2004. Built on the Hilux pickup truck platform, it features two/three rows of seats and is available in either rear-wheel drive.";
  const m5="Thar has an NCAP rating of 4 stars and comes with 2 airbags. Mahindra Thar has a ground clearance of 226 mm and is available in 5 colours. Users have reported a mileage of 14 to 20 kmpl for Thar. The Mahindra Thar has evolved from a simple.";
  const m6="Land Rover Defender specifications Price ₹ 1.06 crore onwards Mileage NA Engine 1997cc Transmission Torque Converter Auto Fuel type Petrol Seating Capacity 5 Seater Land Rover Defender variants and prices";
  const m7="Explore an in-depth overview of the Land Rover Range Rover specifications and features, offering comprehensive details on its engine choices, fuel e and trunk capacity. gain insights into the car's advanced safety features and infotainment system.";
  const m8="The Phantom is the pinnacle of luxury motoring. Everything about it is majestic,  features, or the driving experience. Powered by the iconic 6.75-litre, V12 engine which is considered to be one of the smoothest engines ever built. at Rs. 11 crore on-road";
  const m9="The Land Rover Discovery is a series of seven-seater family SUVs, produced under the Land Rover marque, from the British manufacturer Land Rover, and later Jaguar Land Rover. The series is currently in its fifth iteration.";
  const m10="Mercedes-Benz India has launched the AMG G 63 Grand Edition priced from Rs. 4 crore (ex-showroom). Only 1,000 units of it will be made globally, with 25 reserved for Maybach, AMG, and S-Class customers. The deliveries are slated to start in Q1 2024.";
  const m11=" The initial four generations of the Supra were produced from 1978 to 2002. The fifth generation has been produced since March 2019 and went on sale in May 2019.[4] The styling of the original Supra was derived from the Toyota Celica, but it was both longer and wider";
  const m12="founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive layout. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis";
 
 
  return (
    <div className='continerH'>

      {/* header */}
      <header className='header1'>
        <h1 className='main header'>Car   <span className='s2'>C</span>ollactions in singal <span className='s2'>W</span>eb</h1>
      </header>


      {/* artical */}
      <article id='c1'>
        <div className='artdiv'>

          <div className='indiv'>
            <img src={OIP} alt="OIP" width={350} className='img' />
            <h1 className='inhead' id='car1'>Sport Car</h1>
            <p className='peregraph'> {m1} </p>
          </div>

          <div className='indiv'>
            <img src={Car1} alt="Car1" width={290} className='img' />
            <h1 className='inhead'id='car2'>High Power Supra</h1>
            <p className='peregraph'>  {m2}  </p>
          </div>

          <div className='indiv'>
            <img src={Car2} alt="Car2" height={200} width={300} className='img' />
            <h1 className='inhead'id='car3'>Scropio</h1>
            <p className='peregraph'> {m3} </p>
          </div>

          <div className='indiv'>
            <img src={Car3} alt="Car3" height={200} width={330} className='img' />
            <h1 className='inhead'id='car4'>Fortuner(Legendary Car)</h1>
            <p className='peregraph'>  {m4}</p>
          </div>

          <div className='indiv'>
            <img src={Car4} alt="Car4" height={230} width={320} className='img' />
            <h1 className='inhead' id='car5'>Thar</h1>
            <p className='peregraph'> {m5}  </p>
          </div>

          <div className='indiv'>
            <img src={Car5} alt="Car5" height={200} width={390} className='img'  />
            <h1 className='inhead' id='car6'>Defendar(Most Expensive)</h1>
            <p className='peregraph'> {m6}</p>
          </div>

          <div className='indiv'>
            <img src={Car6} alt="Car6" height={200} width={300} className='img' />
            <h1 className='inhead' id='car7'>Range Rover(Good Looking)</h1>
            <p className='peregraph'> {m7}</p>
          </div>

          <div className='indiv'>
            <img src={Car7} alt="Car7" height={200} width={300} className='img' />
            <h1 className='inhead'id='car8'>Rolls Roys Phantom</h1>
            <p className='peregraph' > {m8}</p>
          </div>

          <div className='indiv'>
            <img src={Car8} alt="Car8" height={200} width={350} className='img' />
            <h1 className='inhead'id='car9'>Discovery(Expensive)</h1>
            <p className='peregraph'> {m9}</p>
          </div>

          <div className='indiv'>
            <img src={Car9} alt="Car9" height={200} width={390} className='img' />
            <h1 className='inhead' id='car10'>G-Wegon</h1>
            <p className='peregraph'> {m10} </p>
          </div>

          <div className='indiv'>
            <img src={Car10} alt="Car10" height={200} width={390} className='img' />
            <h1 className='inhead'id='car11'>Jeguar</h1>
            <p className='peregraph'> {m11} </p>
          </div>

          <div className='indiv'>
            <img src={Car11} alt="Car11" height={200} width={390} className='img' />
            <h1 className='inhead'id='car12'>Lemborgini</h1>
            <p className='peregraph'> {m12}  </p>
          </div>



        </div>

      </article>
      {/* <footer>
            <h1 className='footheader'>Home</h1>
            <h1 className='footheader'>Login</h1>
            <h1 className='footheader'>Services</h1>
            <h1 className='footheader'>Contect</h1>
            
        <p></p>
          </footer> */}

      <footer className='footer99'>
        <div className="footer-content">
          <p>&copy; 2023 My Feature Car Collection</p>
          <ul>
            <li><a href="/">Updeted</a></li>
            <li><a href="/">Feature Car</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </footer>



    </div>
  )
}

export default Home
