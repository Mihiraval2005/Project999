import React from 'react'
import './Contect.css'

function Contect() {

 

  
  return (
    <div>
       <div>
        {/* header */}
        <header className='header3'>
          <h1>Basic  <span className='s3 '>T</span>reding <span  className='s3 '>I</span>nfo</h1>
        </header>
       </div>


       <div className='artdiv2'>
        {/* artical */}
        <article className='artical34'>
           <h1  className='arthead3' id='t1'>History of Treding</h1> <br/>

           <p className='Tperegraph'>Trade has existed for as long as human civilization, i.e., the agricultural revolution. The form of trading, however, has varied across different societies. Primarily due to isolated human communities, which did not allow the unification into a single system. In the past, however, a form of trading that was prevalent across different societies was the barter system, where services and goods were traded in exchange for other services and goods.<br/> <br/>

However, the barter system was found inconvenient given the lack of any basic standard for measuring the value of products. This inconvenience forged the way for money, which acted as a standard against which the values of all products are measured. This invention triggered a chain of economic and financial developments such as the introduction of the credit facility, share trading, etc. <br/>  <br/>

Stock trading came into existence with the formation of joint-stock companies in Europe and played an instrumental role in European imperialism. Informal stock markets started mushrooming in various European cities. The first joint-stock company to publically trade its shares was the Dutch East India Company which released its shares through the Amsterdam Stock Exchange. <br/>   <br/>

After the success of joint-stock companies in fostering economic development along with geographical expansion, those were made a mainstay of the financial world. The first exchange for online trading in India and Asia was the Bombay Stock Exchange which was established in 1875. BSE, along with the National Stock Exchange in India, are the two main houses where stock market trading takes place. </p>



<h1 className='arthead3' id='t2'>Types of Treding</h1>
<p className='p1' id='t3'>1) Day Trading  <br/><br/>
This form of trade involves purchasing and selling stocks in a single day. A single day in stock market terms means 9:15 am to 3:30 pm on a weekday (barring market holidays). In the case of day trading, individuals hold stocks for a few minutes or hours. 

A trader involved in such trade needs to close his/her transactions prior to the day’s market closure. It is popular for capitalizing on small-scale fluctuations in NAV of stocks. 

Day trading requires proficiency in market matters, a thorough understanding of market volatility, and keen sense regarding the up and down in stock values. Therefore, it is performed mostly by experienced investors or traders. </p>
       

     <p className='p1' id='t4'>2) Scalping<br/> <br/>
It is also known as micro-trading. Scalping and day-trading are both subsets of intraday trading. Scalping involves reaping small profits repeatedly ranging from a dozen to a hundred profits in a single market day. 

However, every transaction does not yield profits, and in some cases a trader’s gross losses might exceed the gains. The holding period of securities, in this case, is shorter compared to day-trading, i.e. individuals hold stocks spanning a maximum of a few minutes. 

This feature allows for the frequency of transactions. Similar to day-trading, scalping requires market experience, proficiency, awareness of market fluctuations, and prompt transactions.</p>  

    
       <p className='p1' id='t5' >3) Swing Trading<br/><br/>
This style of stock market trading is used to capitalise on the short-term stock trends and patterns. Swing trading is used to earn gains from stock within a few days of purchasing it; ideally one to seven days. Traders technically analyse the stocks to gauge the movement patterns they are following for proper execution of their investment objectives.</p>
       
      <p  className='p1' id='t6'>4) Momentum Trading<br/><br/>
In case of momentum trading, a trader exploits a stock’s momentum, i.e. a substantial value movement of stock, either upwards or downwards. A trader tries to capitalise on such momentum by identifying the stocks that are either breaking out or will break out. 

In case of upward momentum, the trader sells the stocks he/she is holding, thus yielding higher than average returns. In case of downward movement, the trader purchases a considerable volume of stocks to sell when its price increases. </p> 



      <p className='p1' id='t7'>5) Position Trading<br/><br/>
Position traders hold securities for months aiming to capitalise on the long-term potential of stocks rather than short-term price movements. This style of trade is ideal for individuals who are not market professionals or regular participants of the market. 

Current Impact of Online Trading
The internet has significantly contributed to elevating stock market trading. It has made securities more accessible and convenient to the layman. An individual can now easily trade in the stock market through online trading in India. </p> 
        </article>
       </div>

{/* footer */}
 
<footer className='footer900'>
        <div className="footer-content900">
          <p>&copy; 2023 Treding Page</p>
          <ul>
            <li><a href="#t1">History</a></li>
            <li><a href="#t2">Day Treding</a></li>
            <li><a href="#t3">Scapling</a></li>
            <li><a href="#t4">Swing</a></li>
            <li><a href="#t5">Moment Treding</a></li>
            <li><a href="#t5">Position Treding</a></li>
          </ul>
        </div>
      </footer>
    </div>
  ) 
}

export default Contect




