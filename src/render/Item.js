import React,{useState} from 'react';
import Header from '../dashboardComponents/Header';
import FormItem from '../itemsComponents/form-item';
import FormCategory from '../itemsComponents/form-category'
import Nav from '../itemsComponents/nav';
import ListItems from '../itemsComponents/list-items';
import ListCategories from '../itemsComponents/list-categories'
import Items from '../hooks/items/itemsFetch'
import EditItem from '../hooks/items/editItem'
import EditCategory from '../hooks/items/editCategory'
import Categories from '../hooks/items/categoriesFetch'
import Error500 from '../components/Error500';
import axios from 'axios';

const ContentItem = () => {

  //****************CATEGORIES*************
      const [serverErrors ,setServerErrors] = useState(false);
      const [modalCatgShow,setModalCatgShow] = useState(false);
      const [showListCategories , setShowListCategories] = useState(false);
      const [errorCatg, setCatgError] = useState([]);
      const [cForm , setCform] = useState({});
      const [editCategory,setEditCategory] = useState(null)
      const [loading , setLoading] = useState(false);

      const {categoryData , setCategories} = Categories(setLoading,setServerErrors)
      const {valueCategory,setValueCategory,setGetidCatg, getidCatg }= EditCategory(
        setModalCatgShow,
        setLoading,
        setCform,setServerErrors);
  //****************CATEGORIES*************


  //****************ITEMS*************
     const [ modalShow, setModalShow ] = useState( false );
     const [error, setError] = useState([]);
     const [edit, setEdit] = useState(null);

     const {data ,setItems } = Items(setLoading,setServerErrors);
     const {valueItem , setGetid, setValueItem } = EditItem(setModalShow,setLoading,setServerErrors);
  //****************ITEMS*************



  //**************HANDLE CATEGORIES********

    const handleCatgShow = () =>{
      setModalCatgShow(true);
      setCatgError([])
      setCform({'iduser': localStorage.getItem('iduser')})
      setValueCategory([])
      setEditCategory(false)
    }

    const handleCatgClose = () =>{
      setModalCatgShow(false);
      setCform({})
      setCatgError([])
      setValueCategory([])
    }

    const handleShowListCategories = () =>{
      setShowListCategories(true)
    }

    const handleCloseListCategories = () =>{
      setShowListCategories(false);
    }

    const handleGetid = e =>{
       setEditCategory(e.target.dataset.item);
       setGetidCatg(e.target.dataset.item)
    }
     const handleChange = e =>{
      setCform({...cForm ,[e.target.name]:e.target.value})
   }

     const handleCatgSubmit = async e => {
      e.preventDefault();
      setLoading(true);
      let uri = editCategory ? 'api/update/category' : 'api/create/category';

        await axios.post(`${uri}`,cForm)
       .then(res =>{
        setLoading(false);
        setCategories(true);
        setValueCategory([])
        setCform({});
        setModalCatgShow(false);
      })

      .catch(error=>{
        if (error.response.status === 422) {
            setLoading(false);
            setCatgError(error.response.data.errors);

        }else{
          setServerErrors(true);
        }

      })
  }

  const handleDeleteCategory = async () =>{
    if(window.confirm('Are you sure you want to delete this Category?')){
        setLoading(true)
        await axios({
          method:'POST',
          url:'api/delete/category',
          params: {
                        id: editCategory
                        },
        })

        .then(res =>{
         setLoading(false) 
         setCategories(true)
         setModalCatgShow(false)
         setValueCategory([])
        })

        .catch(error =>{
          setServerErrors(true);
          
        });

     }
  }

  //**************HANDLE CATEGORIES********



  //**************HANDLE ITEMS********
    const handleShow = () => {
    setModalShow(true);
    setError([])
    setEdit(false)
    setValueItem([])
    setShowListCategories(false)
  }

  

  const handleClose = () => {
    setModalShow( false );
    setError([])
    setEdit(false)
    setValueItem([])
  }

  const handleClick = (e) =>{
    setEdit(true);
    setGetid(e.target.dataset.item);
    setEdit(e.target.dataset.item);

  }

  const onSubmit = async data =>{
    setLoading(true);
    let uri = edit ? 'api/update/item' : 'api/create/item'
   await axios.post(uri,data)
      .then(res=>{
        setValueItem([])
        setModalShow(false);
        setLoading(false);
        setError([]);
        setItems(true);
      })
      .catch(error=>{
        if(error.response.status === 422){
          setError(error.response.data.errors)
          setLoading(false);
        }else{
          setServerErrors(true);
        }
        
      })
  }

  const handleDelete = async () =>{
     if(window.confirm('Are you sure you want to delete this Item?')){
        setLoading(true)
        await axios({
          method:'POST',
          url:'api/delete/item',
          params: {
                 id: edit
              },
        })

        .then(res =>{

           setLoading(false) 
           setItems(true);
           setModalShow(false);
           setError([]);
           setEdit(null);
           
        })

        .catch(error =>{
          setServerErrors(true);
          
        });

     }
  }

  //**************HANDLE ITEMS********

  if (serverErrors) {
    return <Error500/>
  }
  
  
  return (
  <>
    <div>
    <Header/>
    </div> 

    <div>
    <Nav
    handleShow={handleShow}/>
    </div>

    <div>
    {showListCategories ? 
    <ListCategories
    handleCloseListCategories={handleCloseListCategories}
    categoryData={categoryData}
    handleCatgShow={handleCatgShow}
    handleGetid={handleGetid}
    loading={loading}/> :
    <ListItems
    data={data}
    handleClick={handleClick}
    handleShowListCategories={handleShowListCategories}
    loading={loading}/>}
    </div>  

    <div>
    <FormCategory
    modalCatgShow={modalCatgShow}
    handleCatgClose={handleCatgClose}
    handleCatgSubmit={handleCatgSubmit}
    handleChange={handleChange}
    cForm={cForm}
    errorCatg={errorCatg}
    valueCategory={valueCategory}
    editCategory={editCategory}
    getidCatg={getidCatg}
    handleDeleteCategory={handleDeleteCategory}
    loading={loading}/>
    </div> 

    <div>
    <FormItem
    modalShow={modalShow}
    handleClose={handleClose}
    edit={edit}
    onSubmit={onSubmit}
    valueItem={valueItem}
    error={error}
    handleDelete={handleDelete}
    handleCatgShow={handleCatgShow}
    categoryData={categoryData}
    loading={loading}/>
    </div>
  </> 
  )
}
export default ContentItem
