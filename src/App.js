// import logo from './logo.svg';
// import React from 'react';
import './App.css';
// import { List } from './components/List';
// import { Form } from  './components/Form'

// function App() {
//   //conditional tardering
//   const [isAuth,setIsAuth]=React.useState(false)
//   const isError = false;
//   const isLoading =false;
//   const handleLogin =()=>{
//     setIsAuth(true)
//   }

//   // if(!isAuth){
//   //   return(
//   //     <div>
//   //       User is not logged in, please 
//   //       <button onClick={handleLogin}>LOGIN</button>
//   //     </div>
//   //   );
//   // }

//   return !isAuth?(
//     <div>
//       user si not logged in , please
//       <button onClick={handleLogin}>Login</button> 
//     </div>
//   ):isLoading ? <div>...loading</div>:isError ? <div>Something went wrong</div>:(
//     <div className="App">
//       <List/>
//       <Form/>
//     </div>
//   );
// }

// export default App;



//................................................................


// import TodoList from './Day3/TodoList'

// import React from 'react'

// function App() {
//   return (
//     <div className='App'>
//       <h1 className='head'>Task list of 2022</h1>
//       <TodoList />
//     </div>
//   )
// }

// export default App

//.....................................................


import React from 'react'
import Card from './Day3-A/Card';

let style_amazon={
  backgroundColor:'orange',
  height:"300px",
  marginTop:"-20px"
}
let style_apple={
  backgroundColor:'whitesmoke',
  height:"300px",
  marginTop:"-20px"
}


function App() {
  return (
    <div className='App'>
      <Card
        date="28/10/2020"
        heading="Amazon Gift"
        heading1="Pay"
        device="Desktop - Mobile"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png"
        b={style_amazon}
      />
      <Card
        date="28/10/2020"
        heading="Apple Gift"
        heading1="Pay"
        device="MacOs - Mobile"
        img='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAACACAMAAADQ1dx8AAAAZlBMVEUAAAD////s7Oz5+fny8vKgoKDm5uZGRkY/Pz/h4eHv7+/CwsLR0dG2trabm5ttbW1NTU0gICBcXFw6OjoUFBSMjIxkZGSmpqZ2dnasrKwzMzMoKChWVlaUlJQuLi7JycmCgoILCwtOuH85AAAEBElEQVRogb2b2ZaqMBBFi0GRSRRBhRbF///J24hoSCXBjjn3vDa1toSkplST50jrvL5Qrv87OaH424oGdVhQXNBTNRLkn+kl5Bs1JGgFAyVHkUMpCpRdZxyKQaB0jqG9jwHJHLoYHv4CdJM5pt39BSiuGMjwiexBQcQ4mwAB6hmHtqbnbUEZ55Bhz9mDDpzTGw0sQflfX8gWtP/jF7IFsaNKdF0wsQNtOMh0hqxBa85plmysQCvGOS7aWIF2MidatrECWXCsQPInWl43S5C0uQ2Jwpeg02zZss+MbEDCpvs5mUKDM1C7DT82sgGNqVxb3D7H2IGSVdfcsk/X7AuQUkE4SE/Xg4J1uu37c3Hum3jh1ydpXUT7iu77TXnu1CuqAYVNMUtyipP2e8Qd80i7bv0Z6FbIpsP5V1VZ/rZVPDocL9mdK0D5VW37myBKPzQtdU8OmqMYKPsxGV/erxXXpgcHXTMDqF+ypmOTreO0U2QNXL0OFBtfx0JtogQpco5vVWUKULNsZ6EbA52WjWx0zyQQ5n1oqgNfIF5WOVMkgtYfbVdLNQLoAuZMIJ4SOtMmFjZDjOOUobi9j8sGlipmngG3416cEcQilysJHY4BpCp8nejtUkeQKp46kRSPEhRnlpQTzsltPAmkaBk4USaBfBBHqppI2ZtwoUwGnZdtbHTwZNAdAzrJoADDITmFJpBbkFfOI9BeYO1V2mJArCKgHgNidQuBYp7M8QgUizhIWwy5BvE2uQv9cBBGvPEJAt05COTq/tc3UoA05fu34gcWdI7YbR/KM7CLUpSv2zEQyHuT3KciVFYnxwkC9BYekm8wCVaDSbcihHJCdJZBsHI8lkCwoqWUQLCOyXzjEa7emzs88lCp6q+iQASpLuxcqZiBUE5oUC+CgH0t4TQNoRAUzUeVwRuEa9A89O5AoorLSfUESkAJyktV+uwFIbuCo6LbA4SKSSLpAQqRDdVRzZjp9XCQP4KAjnVUNDVvYa3Bp/IJhD5Kr3Z0AErBn6rfDXZg45seEXACha6vqEQVnnAJgoxKsQgCvlLhiSDUPRU9E7w3KED1VntvDkK51sqXQZ7xnthaJ4+BIP3iqUM4q9MR2bHqHhYRal+dyDnI+eIdAjXI+c57d9nlXorbdrtw38KaNi49kViKMZDD4rnyTSCHwfbmGUFe74gzn1JTTdG4OU2s/OcKXHSOWedEAfL877cem5RWTzqtTaR9e7iUu0NryqP5RLZmpMrXrN69zLPpFtfPTjtNsVjyYS/dkFigCk67XL5+8leqd1eNzOun0VgO0auneFM5nW6VU5GG+bpE9HuHRj/6Fnfig5r/2DEO8oV5H1XUll2emB4bWHlXlOWxzrVD3/8A47stAgwLT48AAAAASUVORK5CYII='
        b={style_apple}
      />
    </div>
  )
}

export default App







































// list am=nd keys
//array of items
//[1,2,3].map
//conditional 
//different components//
//if true com-a if flase com-b