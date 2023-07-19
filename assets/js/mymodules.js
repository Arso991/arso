/* const checkIfDatasExiste = (arg)=>{
  const tab = ['users', 'products', 'requests', 'orders'];
  if(tab.includes(arg)){
    let url = `http://localhost:3000/${arg}`;
    return url
  }
}

const putDatas = async (apiUrl , datas) => {
  
  await fetch(apiUrl, {
  method : 'PUT',
  headers : {
    'content-type' : 'application/json'
  },
  body : JSON.stringify(datas)
  })
  .then(resp => resp.json())
  .then(result => console.log('modification effcetuer avec succes : ', result))
  .catch(error => {
    console.error('une erreur est survenue lors de la modificaruin des données: ', error);
    throw error;
  })

}

const patchDatas = async (apiUrl , datas) => {
  
  await fetch(apiUrl, {
  method : 'PATCH',
  headers : {'content-type' : 'application/json'},
  body : JSON.stringify(datas)
  })
  .then(resp => resp.json())
  .then(result => console.log('Modification effectuée avec succes :', result))
  .catch(error => {
    console.error('Une erreur est suivenue au cours de la modification:', error)
    throw error
  })
  
}


export const getDatas = async (tabName)=>{
  
  if(checkIfDatasExiste(tabName)){
    let apiUrl = checkIfDatasExiste(tabName);
    try{

      return fetch(apiUrl).then(resp => resp.json()).then(datas => {
        return datas
      })
      
    } catch (error){
      
      console.error(`erreur d'extraction des données :`, error);
      throw error;
    }
    }
  
}


export const postDatas = async (tabName, dataObject)=>{
  if(checkIfDatasExiste(tabName)){
    let apiUrl = checkIfDatasExiste(tabName);
    await fetch(apiUrl, {
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(dataObject),
    }).then(resp => resp.json()).then(result => console.log('données envoyé avec succes:', result)).catch(error =>{
      console.error('Echec, une erreur est survenue lors du transfet des données :', error)
      throw error
    })
  
  }

}


export const updateDatas = (tabName, dataId, datas)=>{
  if(checkIfDatasExiste(tabName) && dataId && datas){
    let apiUrl = `${checkIfDatasExiste(tabName)}/${parseInt(dataId)}`;
    
      fetch(apiUrl).then(resp => resp.json()).then(data => {
      let dataLength = Object.keys(data).length;
      let datasLenght = Object.keys(datas).length
      if(dataLength === datasLenght){
        localStorage.setItem('datastatus', JSON.stringify(' 1'))        
      }else(
        localStorage.setItem('datastatus', JSON.stringify(' 0'))    
      )
    })

    let datastatus = Number( JSON.parse(localStorage.getItem('datastatus')));
    
    if( datastatus === 1 ){
      putDatas(apiUrl , datas);
    } else{
      patchDatas(apiUrl , datas)
    }
    
  }
}


export const deleteDatas = async (tabName , ...idTab) => {
  
  if(checkIfDatasExiste(tabName && idTab)){
    idTab.map(id => {
      let apiUrl = `${checkIfDatasExiste(tabName)}/${id}`;
      
       return fetch(apiUrl, {
        method : 'DELETE',
        headers : {
          'content-type' : 'applicatio,/json'
        }
      })
      .then(resp => resp.ok? console.log(' Suppression realisée avec succes:'):console.log('error :', resp.status))
      .catch(error => {
        console.error('une erreur est survenue lors de la supression:', error);
        throw error;
      })
    })

  }
} */
const checkIfDatasExiste = (arg)=>{
  const tab = ['users', 'products', 'requests', 'orders'];
  if(tab.includes(arg)){
    let url = `http://localhost:3000/${arg}`;
    return url
  }
}

const putDatas = async (apiUrl , datas) => {
  
  await fetch(apiUrl, {
  method : 'PUT',
  headers : {
    'content-type' : 'application/json'
  },
  body : JSON.stringify(datas)
  })
  .then(resp => resp.json())
  .then(result => console.log('modification effcetuer avec succes : ', result))
  .catch(error => {
    console.error('une erreur est survenue lors de la modificaruin des données: ', error);
    throw error;
  })

}

const patchDatas = async (apiUrl , datas) => {
  
  await fetch(apiUrl, {
  method : 'PATCH',
  headers : {'content-type' : 'application/json'},
  body : JSON.stringify(datas)
  })
  .then(resp => resp.json())
  .then(result => console.log('Modification effectuée avec succes :', result))
  .catch(error => {
    console.error('Une erreur est suivenue au cours de la modification:', error)
    throw error
  })
  
}


export const getDatas = async (tabName)=>{
  
  if(checkIfDatasExiste(tabName)){
    let apiUrl = checkIfDatasExiste(tabName);
    try{

      return fetch(apiUrl).then(resp => resp.json()).then(datas => {
        return datas
      })
      
    } catch (error){
      
      console.error(`erreur d'extraction des données :`, error);
      throw error;
    }
    }
  
}


export const postDatas = async (tabName, dataObject)=>{
  if(checkIfDatasExiste(tabName)){
    let apiUrl = checkIfDatasExiste(tabName);
    await fetch(apiUrl, {
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(dataObject),
    }).then(resp => resp.json()).then(result => console.log('données envoyé avec succes:', result)).catch(error =>{
      console.error('Echec, une erreur est survenue lors du transfet des données :', error)
      throw error
    })
  
  }

}


export const updateDatas = (tabName, dataId, datas)=>{
  if(checkIfDatasExiste(tabName) && dataId && datas){
    let apiUrl = `${checkIfDatasExiste(tabName)}/${parseInt(dataId)}`;
    
      fetch(apiUrl).then(resp => resp.json()).then(data => {
      let dataLength = Object.keys(data).length;
      let datasLenght = Object.keys(datas).length
      if(dataLength === datasLenght){
        localStorage.setItem('datastatus', JSON.stringify(' 1'))        
      }else(
        localStorage.setItem('datastatus', JSON.stringify(' 0'))    
      )
    })

    let datastatus = Number( JSON.parse(localStorage.getItem('datastatus')));
    
    if( datastatus === 1 ){
      putDatas(apiUrl , datas);
    } else{
      patchDatas(apiUrl , datas)
    }
    
  }
}


export const deleteDatas = async (tabName , ...idTab) => {
  
  if(checkIfDatasExiste(tabName) && idTab){
    idTab.map(id => {
      let apiUrl = `${checkIfDatasExiste(tabName)}/${id}`;
      
       return fetch(apiUrl, {
        method : 'DELETE',
        headers : {
          'content-type' : 'applicatio,/json'
        }
      })
      .then(resp => resp.ok? console.log(' Suppression realisée avec succes:'):console.log('error :', resp.status))
      .catch(error => {
        console.error('une erreur est survenue lors de la supression:', error);
        throw error;
      })
    })

  }
  console.log(idTab)
}