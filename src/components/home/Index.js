import React from 'react'
import HomeBanner from './HomeBanner'
import HomeSlider from './HomeSlider'
import CricketNews from './CricketNews'
import KabaddiNews from './KabaddiNews'
import FootballNews from './FootballNews'
import HockyNews from './HockyNews'
import BadmintonNews from './BadmintonNews'
import TrendingNews from './TrendingNews'
import HealthFitness from './HealthFitness'
import Quizzes from './Quizzes'

const Index = () => {
  return (
    <div className='container'>
      <HomeBanner />
      <HomeSlider />
      <CricketNews />
      <KabaddiNews />
      <FootballNews />
      <HockyNews />
      <BadmintonNews />
      <HealthFitness />
      <Quizzes />
      <TrendingNews />
    </div>
  )
}

export default Index