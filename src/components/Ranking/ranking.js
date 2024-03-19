import React from 'react';
import "./rankings.css";
export default function Ranking() {
    const ufcPlayersCategory = {
        flyweight: [
          "Brandon Moreno",
          "Brandon Royval",
          "Amir Albazi",
          "Kai Kara-Fsssrance",
          "Matheus Nicolau",
          "Manel Kape",
          "Alex Perez",
          "Muhammad Mokaev" ,
          "Matt Schnell",
          "Tim Elliott",
          "Steve Erceg",
          "Tagir Ulanbekov" ,
          "Sumudaerji" ,
          "David Dvorak",
          "Cody Durden",
        ],
        bantamweight: [
          "Aljamain Sterling",
          "Merab Dvalishvili",
          "Henry Cejudo",
          "Cory Sandhagen",
          "Petr Yan",
          "Marlon Vera",
          "Song Yadong",
          "Deiveson Figueiredo",
          "Rob Font",
          "Dominick Cruz",
          "Pedro Munhoz",
          "Jonathan Martinez",
          "Ricky Simon",
          "Umar Nurmagomedov",
          "Chris Gutierrez",
        ],
        featherweight: [
          "Max Holloway",
          "Yair Rodriguez",
          "Brian Ortega",
          "Arnold Allen",
          "Ilia Topuria",
          "Josh Emmett",
          "Calvin Kattar",
          "Giga Chikadze",
          "Movsar Evloev",
          "Bryce Mitchell",
          "Edson Barboza",
          "Sodiq Yusuff",
          "Dan Ige",
          "Alex Caceres" ,
          "Lerone Murphy" ,
        ],
        lightweight: [
          "Islam Makhachev",
          "Jon Jones",
          "Alexander Volkanovski",
          "Leon Edwards",
          "Alex Pereira",
          "Charles Oliveira",
          "Sean O'Malley",
          "Sean Strickland",
          "Israel Adesanya",
          "Alexandre Pantoja",
          "Aljamain Sterling",
          "Tom Aspinall",
          "Max Holloway",
          "Kamaru Usman",
          "Jiří Procházka",
        ],
        welterweight: [
          "Israel Adesanya",
          "Dricus Du Plessis",
          "Robert Whittaker",
          "Jared Cannonier",
          "Marvin Vettori",
          "Paulo Costa",
          "Roman Dolidze",
          "Brendan Allen",
          "Khamzat Chimaev",
          "Jack Hermansson",
          "Nassourdine Imavov",
          "Paul Craig",
          "Chris Curtis",
          "Kelvin Gastelum",
          "Anthony Hernandez"
        ],
        middleweight: [
          "Max Holloway",
          "Yair Rodriguez",
          "Brian Ortega",
          "Arnold Allen",
          "Ilia Topuria",
          "Josh Emmett",
          "Calvin Kattar",
          "Giga Chikadze",
          "Movsar Evloev",
          "Bryce Mitchell",
          "Edson Barboza",
          "Sodiq Yusuff",
          "Dan Ige",
          "Alex Caceres" ,
          "Lerone Murphy" ,
        ],
        lightHeavyweight: [
          "Aljamain Sterling",
          "Merab Dvalishvili",
          "Henry Cejudo",
          "Cory Sandhagen",
          "Petr Yan",
          "Marlon Vera",
          "Song Yadong",
          "Deiveson Figueiredo",
          "Rob Font",
          "Dominick Cruz",
          "Pedro Munhoz",
          "Jonathan Martinez",
          "Ricky Simon",
          "Umar Nurmagomedov",
          "Chris Gutierrez",
        ],
        heavyweight: [
          "Aljamain Sterling",
          "Merab Dvalishvili",
          "Henry Cejudo",
          "Cory Sandhagen",
          "Petr Yan",
          "Marlon Vera",
          "Song Yadong",
          "Deiveson Figueiredo",
          "Rob Font",
          "Dominick Cruz",
          "Pedro Munhoz",
          "Jonathan Martinez",
          "Ricky Simon",
          "Umar Nurmagomedov",
          "Chris Gutierrez",
        ],
        womens_strawweith: [
          "Carla Esparza",
          "Yan Xiaonan",
          "Tatiana Suarez",
          "Amanda Lemos",
          "Jéssica Andrade",
          "Virna Jandiroba",
          "Marina Rodriguez",
          "Mackenzie Dern",
          "Amanda Ribas",
          "Luana Pinheiro",
          "Loopy Godinez",
          "Tabatha Ricci",
          "Angela Hill",
          "Karolina Kowalkiewicz",
          "Michelle Waterson-Gomez"
        ],
        womens_flyweight: [
          "Alexa Grasso",
          "Zhang Weili",
          "Valentina Shevchenko",
          "Julianna Peña",
          "Erin Blanchfield",
          "Manon Fiorot",
          "Rose Namajunas",
          "Carla Esparza",
          "Yan Xiaonan",
          "Tatiana Suarez",
          "Jéssica Andrade",
          "Raquel Pennington",
          "Amanda Lemos",
          "Ketlen Vieira",
          "Irene Aldana"
        ],
        womens_bantamweight: [
          "Julianna Peña",
            "Raquel Pennington",
            "Mayra Bueno Silva",
            "Ketlen Vieira",
            "Holly Holm",
            "Irene Aldana",
            "Pannie Kianzad",
            "Yana Santos",
            "Karol Rosa",
            "Macy Chiasson",
            "Miesha Tate",
            "Norma Dumont",
            "Julia Avila",
            "Josiane Nunes",
            "Chelsea Chandler"
        ],
      };
      const players = [
            {id:1, firstName:"ISLAM", lastName:"MAKHACHEV", category:"lightweight"},
            {id:2, firstName:"ALEXANDRE", lastName:"PANTOJA", category:"flyweight"},
            {id:3, firstName:"SEAN", lastName:"O'MALLEY", category:"bantamweight"},
            {id:4, firstName:"ALEXANDER", lastName:"VOLKANOVSKI", category:"featherweight"},
            {id:5, firstName:"ISLAM", lastName:"MAKHACHEV", category:"lightweight"},
            {id:6, firstName:"SEAN", lastName:"STRICKLAND", category:"welterweight"},
            {id:7, firstName:"ALEX", lastName:"PEREIRA", category:"middleweight"},
            {id:8, firstName:"JON", lastName:"JONES", category:"lightHeavyweight"},
            {id:9, firstName:"ALEXA", lastName:"GRASSO", category:"womens_strawweith"}, 
            {id:10, firstName:"ZHANG", lastName:"WEILI", category:"womens_flyweight"}, 
            {id:11, firstName:"ALEXA", lastName:"GRASSO", category:"womens_bantamweight"},
      ];
  return (
    <div className='ranks'>
        <h1 className="title-main">ATHLETE RANKINGS</h1>
        <img src="https://tpc.googlesyndication.com/simgad/945640650811365436"   className="img_ad"/>
        <div className='players row'>
            {
               players.map(
                    player=>
                    <div className='player col-3' key={player.id}>
                        <h6 className='category'>{player.category.toLocaleUpperCase()}</h6>
                        <h4 className='fullName'>
                            <span className='firstName'>{player.firstName}</span><br/>
                            <span className='lastName'>{player.lastName}</span>
                        </h4>
                        <div className='playerImage'>
                            <img className='imgOfPlayer' src={`./boxers/${player.firstName}${player.lastName}.png`} />
                        </div>
                        <div className='sameCatgPlayers'>
                            {ufcPlayersCategory[player.category].map(
                                (boxer, index)=>
                                <div className='boxer' key={index}>
                                    <span className='rank'>{index+1}</span>
                                    <span className='boxerName'>{boxer}</span>
                                    <span>
                                      <img className='ranckChange' src={`./${+player.lastMatch>0?"play (1)":(+player.lastMatch<0?"play":"")}.png`} alt="" />{Math.abs(player.lastMatch)>0?Math.abs(player.lastMatch):""}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
               ) 
            }
        </div>
    </div>
  )
}
