form {
    margin-right: .8em;
    padding: .5em;
    margin-top: .4em;
    
  
  }
  
  input {
    padding: .7em;
    margin: 1em 0 1em .3em;
    width: 100%;
    max-width: 400px;
    border-radius: 3px;
    box-shadow: .5px 1px 2px #000;
    border-style: none;
    font-size: 1rem;
  }
  @media only screen and (max-width: 500px) {
    input {
      padding: .6em;
      font-size: .9rem;
    }
  }
  
  input:focus{
    outline: none;
    border-bottom: 3px solid #ecae10; 
  }
   
  button {
     background-color: #ecae10;
     color: #fff;
     box-shadow: .5px 1px 2px #000;
     width: 200px;
     font-size: 1.1rem;
     margin-top: .6em;
     padding: .5em;
     border-radius: 4px;
     border-style: none;
     text-align: center;
     
     transition: all .2s linear ;
  }
  
  button:hover  {
    background-color: #ad7f09;
    transform: translateY(3px); 
  }
  
  @media only screen and (max-width: 500px) {
    button {
      width: 140px;
     font-size: 1rem;
     padding: .6em;
    }
  }
  
  .errors {
    color: #eee;
    font-size: .9rem;
    margin-top: -.9em;
    text-align: center;
  }
  @media only screen and (max-width: 900px) {
    .errors {
      font-size: .7rem;
    }
  }
  