'use client'
import React, { useState } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from '@mui/material';
import Image from 'next/image';
import '../Styles/Form.css';
import MenuItem from '@mui/material/MenuItem';

type FormData = {
  utilisateur: string;
  texte2: string;
  annees: string;
  number1: string;
  number2: string;
  number3: string;
  texte7: string;
  image1: string;
  image2: string;
  image3: string;
};
const defaultImage1 = 'Ajuster.svg';
const defaultImage2 = 'Transferer.svg';
const defaultImage3 = 'Solder.svg';
const utilisateurOptions = [
  'Darléne Menson Dujon ',
  'Marlon Brandon',
 
  // Ajoutez d'autres utilisateurs selon vos besoins
];
const Form: React.FC<{ addData: (data: FormData) => void }> = ({ addData }) => {
  const initialFormData: FormData = {
    utilisateur: '',
    texte2: '',
    annees: '',
    number1: '',
    number2: '',
    number3: '',
    texte7: '',
    image1: defaultImage1, // Image 1 par défaut
    image2: defaultImage2, // Image 2 par défaut
    image3: defaultImage3, // Image 3 par défaut
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, columnName: string) => {
    const updatedFormData: FormData = { ...formData, [columnName]: e.target.value };
    setFormData(updatedFormData);
  };

  const clearForm = () => {
    setFormData(initialFormData);
  };

  const handleAddData = () => {
    if (
      formData.utilisateur &&
      formData.texte2 &&
      formData.annees &&
      formData.number1 &&
      formData.number2 &&
      formData.number3  
    ) {
      // Ajoutez les données du formulaire au tableau
      addData(formData);
      clearForm();
    } else {
      // Affichez un message d'erreur ou effectuez toute autre action pour indiquer que les champs sont incomplets
      alert('Veuillez remplir tous les champs du formulaire.');
    }
  };

  return ( 
      <div className='formulaire'>
        <TextField
            label="Utilisateur"
            value={formData.utilisateur}
            onChange={(e) => handleChange(e, 'utilisateur')}
            select
          >
            {utilisateurOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

        <TextField
          label="catégories"
          value={formData.texte2}
          onChange={(e) => handleChange(e, 'texte2')}
          placeholder='catégories'
        />

          <TextField
            label="Année"
            value={formData.annees}
            onChange={(e) => handleChange(e, 'annees')}
            // Laissez le type en tant que "text" pour accepter une chaîne de texte
            inputProps={{
              pattern: '^(19|20)\\d\\d-(19|20)\\d\\d$', // Expression régulière pour le format "année1-année2"
              onInput: (e) => {
                e.preventDefault();
                const newValue = e.currentTarget.value.replace(/[^0-9-]/g, ''); // Supprimer tous les caractères non numériques sauf le tiret (-)
                e.currentTarget.value = newValue;
              },
            }}
          />

         <TextField
           label="Solde Actuel"
            value={formData.number1}
            onChange={(e) => handleChange(e, 'number1')}
            type="number"
            inputProps={{
              min: 0, // Valeur minimale autorisée
            }}
          placeholder='Solde Actuel'
        />

         <TextField
           label="Solde pris"
            value={formData.number2}
            onChange={(e) => handleChange(e, 'number2')}
            type="number"
            inputProps={{
              min: 0, // Valeur minimale autorisée
            }}
          placeholder='Solde pris'
        />

         <TextField
           label="Solde futur"
            value={formData.number3}
            onChange={(e) => handleChange(e, 'number3')}
            type="number"
            inputProps={{
              min: 0, // Valeur minimale autorisée
            }}
          placeholder='Solde futur'
        />

        <TextField
         label="image1"
          value={formData.image1}
          onChange={(e) => handleChange(e, 'image1')}
        />

         <TextField
          label="image2"
          value={formData.image2}
          onChange={(e) => handleChange(e, 'image2')}
        />
        
         <TextField
          label="image3"
          value={formData.image3}
          onChange={(e) => handleChange(e, 'image3')}
        />

       <Button variant="contained" color="primary" onClick={clearForm}>
          Effacer
        </Button>
        <Button variant="contained" color="primary" onClick={handleAddData}>
          Ajouter
        </Button>
      </div>
  
  );
};

const TableData: React.FC<{ tableData: FormData[]; deleteRow: (index: number) => void }> = ({
  tableData,
  deleteRow,
}) => {
  const getHrClass = (rowIndex: number) => {
    // Déterminez la classe CSS en fonction de l'index de la ligne
    return rowIndex % 2 === 0 ? 'hr-row1' : 'hr-row2';
  };
  return (
    <div className="table-container">
      <TableContainer className='tablecont' component={Paper}>
        <Table className='table-style' > 
          <TableHead>
            <TableRow>
              <TableCell className='tables'>Utilisateur</TableCell>
              <TableCell  className='cata'>Categories</TableCell>
              <TableCell className='per'>Période</TableCell>
              <TableCell className='sold'>Solde actuel</TableCell>
              <TableCell className='prix'>Solde pris</TableCell>
              <TableCell className='futur'>Solde futur</TableCell>
              <TableCell className='ima'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, rowIndex) => (
              <TableRow key={rowIndex} className={rowIndex % 2 === 0 ? 'row1' : 'row2'}>
                <TableCell className='cell1'>{row.utilisateur}</TableCell>
                <TableCell className='cell12'><hr className={`circle ${getHrClass(rowIndex)}`} /> <p className='parae'>{row.texte2}</p></TableCell>
                <TableCell className='cell13'>{row.annees}</TableCell>
                <TableCell className='cell14'>{row.number1}</TableCell>
                <TableCell className='cell15'>{row.number2}</TableCell>
                <TableCell className='cell16'>{row.number3}</TableCell>
                <TableCell className='cell17'>
                <div className='logose'>
                    <Image className='imag1' src={row.image1} alt="Image1" width={32} height={30} />
                    <Image className='imag2' src={row.image2} alt="Image2" width={32} height={30} />
                    <Image className='imag3' src={row.image3} alt="Image3" width={32} height={30} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="delete-buttons">
        {tableData.map((_, rowIndex) => (
          <Button key={rowIndex} variant="contained" color="primary" onClick={() => deleteRow(rowIndex)}>
            Supprimer
          </Button>
        ))}
      </div>
    </div>
      

  );
};

const FormAndTable: React.FC = () => {
  const defaultImage1 = 'Ajuster.svg';
  const defaultImage2 = 'Transferer.svg';
  const defaultImage3 = 'Solder.svg';

  const initialTableData: FormData[] = [];
  initialTableData.push({
    utilisateur: 'Darléne Menson Dujon', // Utilisateur par défaut
    texte2: 'Congées payées',
    annees: '2023-2024', // Période par défaut
    number1: '100', // Solde actuel par défaut
    number2: '50', // Solde pris par défaut
    number3: '75', // Solde futur par défaut
    image1: defaultImage1, // Image 1 par défaut
    image2: defaultImage2, // Image 2 par défaut
    image3: defaultImage3, // Image 3 par défaut
  });
  initialTableData.push({
    utilisateur: 'Marlon Brandon', // Deuxième utilisateur par défaut
    texte2: 'RTT',
    annees: '2023-2024', // Période par défaut
    number1: '100', // Solde actuel par défaut
    number2: '50', // Solde pris par défaut
    number3: '75', // Solde futur par défaut
    image1: defaultImage1, // Image 1 par défaut
    image2: defaultImage2, // Image 2 par défaut
    image3: defaultImage3, // Image 3 par défaut
  });

  const [tableData, setTableData] = useState<FormData[]>(initialTableData);

  const handleAddData = (data: FormData) => {
    // Ajoutez les données au tableau
    setTableData([...tableData, data]);
  };
  const handleDeleteRow = (index: number) => {
    const updatedData: FormData[] = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData); // Mise à jour des données du tableau
  };
  return (
    <Container>
      <Form addData={handleAddData} />
      <TableData tableData={tableData} deleteRow={handleDeleteRow}/>
    </Container>
  );
};

export default FormAndTable;
