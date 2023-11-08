// components/Sidebar.tsx
'use client'
import Image from 'next/image';
import React, { useState }  from 'react';
import { Card, CardContent, Container, Typography, CardMedia, AppBar, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import '../Styles/Sidebar.css';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps,} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DoneIcon from '@mui/icons-material/Done';
import BalanceIcon from '@mui/icons-material/Balance';
import SearchIcon from '@mui/icons-material/Search';
import BadgeIcon from '@mui/icons-material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={< ExpandMoreIcon sx={{ fontSize: '22px' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));


const Sidebar: React.FC = () => {

  const menuItems = [
    {
      title: 'Planning',
      image: '/Module_Planning.svg', // Replace with your image path
      marginLeft: '30px',
      fontweight:400
    },
    {
      title: 'Absences',
      image: '/Module_Absences.svg', // Replace with your image path
      marginLeft: '30px',
      border: '2px solid #0090F5', // Ajoutez une bordure transparente
      textColor: '#0090F5',
      fontweight:500 // Définissez la couleur du texte sur noir
    },
    {
      title: 'Heures',
      image: '/Module_Absences.svg', // Replace with your image path
      marginLeft: '40px',
      fontweight:400
    },
    {
      title: 'Note de frais',
      image: '/Module_NotedeFrais.svg', // Replace with your image path  
      marginLeft: '20px',
      fontweight:400
    },
    {
      title: 'Présence',
      image: '/Module_Présence.svg', // Replace with your image path  
      marginLeft: '30px',
      fontweight:400
    },
    {
      title: 'Compétence',
      image: '/Module_Compétences.svg', // Replace with your image path 
       marginLeft: '20px',
       fontweight:400
    },
    {
      title: 'Salaire et paie',
      image: '/Module_SalaireetPaie.svg', 
       marginLeft: '10px',
       fontweight:400
    },
    {
      title: 'Entretiens',
      image: '/Module_Entretiens.svg', // Replace with your image path 
       marginLeft: '30px',  fontweight:400

    },
    {
      title: 'Matériels',
      image: '/Module_Matériels.svg', // Replace with your image path  
      marginLeft: '30px',
      fontweight:400
    },
    {
      title: 'Documents',
      image: '/Mdule_Documents.svg', // Replace with your image path  
      marginLeft: '25px',
      fontweight:400
    },
    {
      title: 'RH',
      image: '/Module_RH.svg', // Replace with your image path  
      marginLeft: '55px',
      fontweight:400
    },
    // Add more menu items
  ];

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };
  return (
    <div className="sidebar-container">
    <div className={`sidebar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='burg'>
      <button  className='buttonburg'  onClick={toggleMenu}>
        <Image
        src="/Burger button.svg"
        alt="Description de l'image"
        width={32} // Largeur de l'image en pixels
        height={200}// Hauteur de l'image en pixels
        />
     </button>
        </div>
        <div  className='Acceuil' >
          <HomeIcon  className='Homeicon'/>
          <Typography className='sous11' variant="h4" >
            <p>Accueil</p> 
          </Typography>
        </div>

        <div className='Ajout'>
          <AddIcon className='addicon' />
          <Typography className='sous12' variant="h4" >
              <p>Ajouter</p>
          </Typography>
        </div>

        <div className='Accord'>
        <div className='Monespace' >
          <BadgeIcon className='badgeicon'/>
          <Typography className='sous13' variant="h4" >
          <p>Mon espace</p>
          </Typography>
          <ExpandMoreIcon className='stripe1'/>
        </div>

        <div className='valid'>
          <DoneIcon className='doneicon'/>
          <Typography className='sous14' variant="h4" >
          <p>Validation</p>
          </Typography>
          <ExpandMoreIcon className='stripe21'/>
        </div>
     
        <div className='Indic'>
          <FormatListBulletedIcon className='listicon' />
          <Typography className='sous15' variant="h4" >
          <p>Indicateurs</p>
          </Typography>
          <ExpandMoreIcon className='stripe31'/>
        </div>

        <Accordion >
          <AccordionSummary className='accordsumm' aria-controls="panel1d-content" id="panel1d-header">
            <BalanceIcon className='balanceicon'/>
            <Typography className='sous17' >Soldes</Typography>
          </AccordionSummary>
          <AccordionDetails>
       
            <ul className='liste'>
            <li className='liste1'>
              <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                Gestions des soldes
              </Link>
            </li>
            <li className='liste2'>
              <Link
                className={`link ${pathname === '/Ajouter soldes' ? 'active' : ''}`}
                href="/"
              >
                Ajuster un solde
              </Link>
            </li>
            <li className='liste3'>
              <Link className={`link ${pathname === '/compteurs' ? 'active' : ''}`} href="/">
                Compteurs
              </Link>
            </li>
            <li className='liste4'>
              <Link className={`link ${pathname === '/Historiques' ? 'active' : ''}`} href="/">
                Historiques
              </Link>
            </li>
            </ul>
     
           </AccordionDetails>
         </Accordion>

      <div className='search'>
          <SearchIcon className='searchicon' />
          <Typography className='sous16' variant="h4">
          <p>Recherche</p>
          </Typography>
          <ExpandMoreIcon className='stripe41' />
       </div>
     
        <Image
          style={{marginTop:"94px"}}
          src="/Graphic.svg"
          alt="Description de l'image"
          width={200} // Largeur de l'image en pixels
          height={289}// Hauteur de l'image en pixels
          />

        </div>
       
    </div>
     <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
     <div className="menu-content">
     <AppBar position="static" style={{background:"white",boxShadow:'none',borderRadius:'40px'}}>
     <Image
          style={{marginTop:"118px",marginLeft:"224px"}}
          src="/Logo.svg"
          alt="Description de l'image"
          width={350} // Largeur de l'image en pixels
          height={72.5}// Hauteur de l'image en pixels
          />
      </AppBar>
      <Container style={{marginTop:'109px',paddingBottom:'280px'}}>
        <div style={{ display: 'flex', flexWrap: 'wrap',marginLeft:'7px' }}>
          {menuItems.map((item, index) => (
            <Card key={index} style={{ width:'170px', marginTop:'6px', marginLeft:'6px', height:"170",borderRadius:"10px",background:"#FFFFFF", border: item.border }}>
              <CardMedia style={{width:'89px',height:'83px',marginLeft:'40px',marginTop:'10px'}}
                component="img"
                alt={item.title}
                image={item.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" className='typo1' component="div" style={{fontFamily:'Poppins',fontSize:'15px',fontWeight: item.fontweight,color: item.textColor,marginLeft: item.marginLeft, }}>
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
     </div>
   </div>
   </div>
  );
};

export default Sidebar;
