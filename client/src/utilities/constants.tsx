export const buses: { label: string; value: string }[] = [
  {
    value: 'toyota',
    label: 'Toyota Hiace'
  }, 
  {
    value: 'minibus',
    label: 'Minibus'
  }, 
  {
    value: 'sienna',
    label: 'Sienna'
  },  
]

export const cities: { label: string; value: string }[] = [
    {
      label: "Lagos",
      value: "lagos",
    }, 
    {
      label: "Kano",
      value: "kano",
    }, 
    {
      label: "Abuja",
      value: "abuja",
    }, 
    {
      label: "Ibadan",
      value: "ibadan",
    }, 
    {
      label: "Port Harcourt",
      value: "ph",
    }, 
    {
      label: "Aba",
      value: "aba",
    }, 
    {
      label: "Onitsha",
      value: "onitsha",
    }, 
    {
      label: "Maiduguri",
      value: "maiduguri",
    }, 
    {
      label: "Benin",
      value: "benin",
    }, 
    {
      label: "Shagamu",
      value: "shagamu",
    }, 
    {
      label: "Ogbomoso",
      value: "ogbomoso",
    }, 
    {
      label: "Owerri",
      value: "owerri",
    }, 
    {
      label: "Ikeja",
      value: "ikeja",
    }, 
    {
      label: "Osogbo",
      value: "osogbo",
    }, 
    {
      label: "Agege",
      value: "gege",
    }, 
    {
      label: "Sokoto",
      value: "sokoto",
    },  
    {
      label: "Nnewi",
      value: "nnewi",
    }, 
    {
      label: "Ilesa",
      value: "ilesa",
    }, 
    {
      label: "Minna",
      value: "minna",
    },  
    {
      label: "Oshodi",
      value: "oshodi",
    }, 
    {
      label: "Surulere",
      value: "surulere",
    }, 
    {
      label: "Mushin",
      value: "mushin",
    },  
    {
      label: "Ojota",
      value: "ojota",
    },  
    {
      label: "Ikoyi",
      value: "ikoyi",
    }, 
    {
      label: "Warri",
      value: "warri",
    },  
    {
      label: "Suleja",
      value: "suleja"
    },
    {
      label: "Akure",
      value: "akure"
    },
    {
      label: "Ekiti",
      value: "ekiti"
    },
    {
      label: "Osun",
      value: "osun"
    },
    {
      label: 'Muritala Muhammed Intl Airport',
      value: "mma"
    }  
]

export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  maxWidth: 'sm',
  bgcolor: '#fff',
  border: '1px solid #009cff',
  p: 4,
}

export const findLocationByValue = (location: string) => {
  const foundLabel = cities.find(value => value.value === location);
  if(foundLabel){
    return foundLabel?.label
  }
  return location; 
}

export const today = new Date().toISOString().split("T")[0];
