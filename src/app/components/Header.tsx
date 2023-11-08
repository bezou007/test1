// components/Header.tsx
import Image from 'next/image';
import React from 'react';
import { AppBar, Toolbar,  Typography, IconButton } from '@mui/material';
import BalanceIcon from '@mui/icons-material/Balance';
import { Divider } from '@mui/material';
import "../Styles/Header.css"



const Header: React.FC= () => {
  return (

    <AppBar className='Appbar' position="static">   
      <Toolbar>
      <Image
        src="/Absence_Icon.svg"
        alt="Description de l'image"
        width={38} // Largeur de l'image en pixels
        height={32} // Hauteur de l'image en pixels
      />
        <Typography className='abs' variant="h1" >
        <p>Abscence</p>
        </Typography>

        <Image
        className='stripe2'
        src="/stripe2.svg"
        alt="Description de l'image"
        width={10} // Largeur de l'image en pixels
        height={19} // Hauteur de l'image en pixels
      />
  
        <BalanceIcon className='bala'/>
       

       <Typography className='sous1' variant="h4" >
        <p>Sous module</p>
        </Typography>

        <Image
        className='stripe3'
        src="/stripe2.svg"
        alt="Description de l'image"
        width={10} // Largeur de l'image en pixels
        height={19} // Hauteur de l'image en pixels
        
      />

         <Typography className='sous2' variant="h3" >
        <p>Sous sous module</p>
        </Typography>

        <Image
        className='Help'
        src="/Help.svg"
        alt="Description de l'image"
        width={42} // Largeur de l'image en pixels
        height={32} // Hauteur de l'image en pixels

       /> 

        <Image
        className='set'
        src="/settings.svg"
        alt="Description de l'image"
        width={42} // Largeur de l'image en pixels
        height={32} // Hauteur de l'image en pixels
       
        />
       <Divider className='divi' orientation="vertical" />

       <Typography className='nom' variant="h6" >
        <p style={{color:"#494949",fontSize:"16px"}}>Nom et prenom</p>
        <p style={{color:"#858585",fontSize:"14px"}}>Entreprise</p>
        </Typography>

        <Image
        className='profil'
        src="/photo.png"
        alt="Description de l'image"
        width={42} // Largeur de l'image en pixels
        height={32} // Hauteur de l'image en pixels
   
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
