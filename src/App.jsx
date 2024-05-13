import React from 'react';
import Pricecard from './Components/Card/Pricecard';

const App = () => {
  
const data=[
  {
    head:"FREE",
    price:"$0/month",
    user:"Single User",
    storage:"50GB Storage",
    limit:"Unlimited Public Projects",
    access:"Community Access",
    project:{
      title:"Unlimited Private Projects",
      icon: "fas fa-xmark",
      className: "text-muted"
    },
    support:{
      title: "Dedicated Phone Support",
      icon: "fas fa-xmark",
      className: "text-muted"
    },
    subdomain:{
      title: "Free Subdomain",
      icon: "fas fa-xmark",
      className: "text-muted"
    },
    report:{
      title:"Monthly Status Reports",
      icon: "fas fa-xmark",
      className: "text-muted"
    }
  },
  {
    head:"PLUS",
    price:"$9/month",
    user:"5 Users",
    storage:"50GB Storage",
    limit:"Unlimited Public Projects",
    access:"Community Access",
    project:{
      title:"Unlimited Private Projects",
      icon: "fas fa-check",
      className: "card-text"
    },
    support:{
      title: "Dedicated Phone Support",
      icon: "fas fa-check",
      className: "card-text"
    },
    subdomain:{
      title: "Free Subdomain",
      icon: "fas fa-check",
      className: "card-text"
    },
    report:{
      title: "Monthly Status Reports",
      icon: "fas fa-xmark",
      className: "card-subtitle text-muted"
    }
  },
  {
    head:"PRO",
    price:"$49/month",
    user:"Unlimited Users",
    storage:"50GB Storage",
    limit:"Unlimited Public Projects",
    access:"Community Access",
    project:{
      title:"Unlimited Private Projects",
      icon: "fas fa-check",
      className: "card-text"
    },
    support:{
      title: "Dedicated Phone Support",
      icon: "fas fa-check",
      className: "card-text"
    },
    subdomain:{
      title: "Free Subdomain",
      icon: "fas fa-check",
      className: "card-text"
    },
    report:{
      title: "Monthly Status Reports",
      icon: "fas fa-check",
      className: "card-text"
    }
  }
]

  return (
    <>
    
      <Pricecard data={data}/>
    </>
  );
};

export default App;