import React from 'react'
import PortItem from './PortItem'
import proj1Image from '../../assets/images/proj1.png'
import proj2Image from '../../assets/images/proj2.png'
import proj3Image from '../../assets/images/proj3.png'
const portItems = [
  {
    src: proj1Image,
    description: "A website that utilizes NASA's API to display the Astronomy Picture of the Day. Allows the user to search for a specific date's picture. ",
    title: 'Astronomy Picture of the Day',
    siteLink: 'https://chrisdehaan.github.io/Team-SCCRM/',
    codeLink: "https://github.com/ChrisDeHaan/Team-SCCRM"
  },
  {
    src: proj2Image,
    description:"A webapp designed to be used by a hospital/doctor's office to manage their patients. Allows a doctor to see all of their patients vital signs at a glance.",
    title: 'Remote Patient Monitoring',
    siteLink: 'https://sccrm-healthcare-bbafb87ca81b.herokuapp.com/home',
    codeLink: "https://github.com/Elrond-Hubbard/Team-SCCRM-2"
  },
  {
    src: proj3Image,
    description: "A card trading game with a battle system. Users can make an account and trade cards with other users. Users can also take their cards into battle in the dungeon and earn coins that can be spent on new cards.",
    title: 'Prográmon Palace',
    siteLink: 'https://programon-palace.onrender.com/',
    codeLink: "https://github.com/Bunde20/Team-SCCRM-3"
  }
]

const Port = () => {
  return (
    <div id='port' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-black">Projects</h1>
      <div className="flex flex-col md:flex-row justify-center gap-4">
      {portItems.map((portItem, idx) => (
        <PortItem
        key={idx}
        src={portItem.src}
        description={portItem.description}
        title={portItem.title}
        siteLink={portItem.siteLink}
        codeLink={portItem.codeLink}
        />
        ))}
        </div>
        </div>

  )
}

export default Port