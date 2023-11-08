// components/Sidebar.tsx
'use client'
import Image from 'next/image';
import React from 'react';
import { Typography} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import '../Styles/Sidebar.css';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DoneIcon from '@mui/icons-material/Done';
import BalanceIcon from '@mui/icons-material/Balance';
import SearchIcon from '@mui/icons-material/Search';
import BadgeIcon from '@mui/icons-material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()
  return (
  
    <div className="sidebar">
      <div className='burg'>
      <button  className='buttonburg' >
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
            <p>Acceuil</p> 
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
  );
};

export default Sidebar;
