import React from 'react'
import './News.css'
import newsOne from '../../Assets/images/newsOne.jpg'
import newsTwo from '../../Assets/images/newsTwo.jpg'
import newsThree from '../../Assets/images/newsThree.jpg'
import newsFour from '../../Assets/images/newsFour.jpg'
import newsFive from '../../Assets/images/newsFive.jpg'
import newsSix from '../../Assets/images/newsSix.jpg'

const News = () => {
  return (
    <div className='news'>
        <h1>Recent Updates From FFR</h1>
        <div className="news-wrapper">
            <div className="each-news">
                <img src={newsOne} alt="" />
                <div className="each-news-info">
                      <h3><a href="/">Rescue Mission Success</a></h3>
                      <div> Over the weekend, our team successfully rescued a group of abandoned puppies from a rural area.</div>
                </div>
            </div>
              <div className="each-news">
                  <img src={newsTwo} alt="" />
                  <div className="each-news-info">
                      <h3><a href="/">Community Outreach Event</a></h3>
                      <div> Last Saturday, we hosted a successful community outreach event where we provided free microchipping and vaccinations for pets.</div>
                  </div>
              </div>
              <div className="each-news">
                  <img src={newsThree} alt="" />
                  <div className="each-news-info">
                      <h3><a href="/">Foster Network Expansion</a></h3>
                      <div>We're excited to announce the expansion of our foster care network.</div>
                  </div>
              </div>
              <div className="each-news">
                  <img src={newsFour} alt="" />
                  <div className="each-news-info">
                      <h3><a href="/">Adoption Milestone</a></h3>
                      <div>This month, we celebrated a significant milestone as we reached 100 adoptions! </div>
                  </div>
              </div>
              <div className="each-news">
                  <img src={newsFive} alt="" />
                  <div className="each-news-info">
                      <h3><a href="/">Volunteer Appreciation Day</a></h3>
                      <div>Today, we're honoring our dedicated volunteers who selflessly give their time and energy to care for our shelter animals.</div>
                  </div>
              </div>
              <div className="each-news">
                  <img src={newsSix} alt="" />
                  <div className="each-news-info">
                      <h3><a href="/">Emergency Relief Efforts</a></h3>
                      <div>In response to recent natural disasters in our region, our shelter has mobilized emergency relief efforts to assist animals affected by the crisis.</div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default News
