import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchCats, fetchCategories, fetchMoreCats, selectCats, selectCategories, selectMoreCats} from './catsSlice';

import {Switch, Route} from "react-router-dom";
import CatsImages from "../../components/CatsImages";
import {NavFixedItem_LINK, ULFixed, FixedRoutesCont, FixedMainDiv, LIFixed} from "../../styles/cats";

export function Cats() {
  const dispatch = useDispatch();
  const cats = useSelector(selectCats)
  const categories = useSelector(selectCategories)
  const moreCats = useSelector(selectMoreCats)
  const [fetchedData, setFetchedData] = useState(null)
  const [fetchedCategories, setFetchedCategories] = useState(null)
  const [fetchedMoreData, setFetchedMoreData] = useState(null)

  const fetchSomeCatData = (id)=>{
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`).
    then((res)=>res.json()).
    then(res=> {
      // console.log(res)
      return setFetchedData(res)
    })
  }

  const fetchSomeCategories = (url='https://api.thecatapi.com/v1/categories ')=>{
    return fetch(url).
    then((res)=>res.json()).
    then(res=> {
      // console.log(res)
      return setFetchedCategories(res)
    })
  }

  const fetchMoreCatData = (id)=>{
      return fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`).
      then((res)=>res.json()).
      then(res=> {
          // console.log(res)
          return setFetchedMoreData(res)
      })
  }

  useEffect(()=>{
    if (fetchedData) return dispatch(fetchCats(fetchedData))
  })
  useEffect(()=>{
    if (fetchedCategories) return dispatch(fetchCategories(fetchedCategories))
  })

    useEffect(()=>{
        if (fetchedMoreData) return dispatch(fetchMoreCats(fetchedMoreData))
    })
  useEffect(()=>{
    // if (!fetchedData) return fetchSomeCatData()
  },[])

  useEffect(()=>{
    if (!fetchedCategories) return fetchSomeCategories()
  },[])


  return (
    <FixedMainDiv>
      {categories.length ?
            <ULFixed >
              <>
                  <LIFixed>
                      <NavFixedItem_LINK to='/'>Home</NavFixedItem_LINK>
                  </LIFixed>
                {
                  categories.map(({id, name})=>
                      <LIFixed key={id}>
                          <NavFixedItem_LINK
                              activeStyle={{
                                fontWeight: "bold",
                                color: "red",
                                backgroundColor: '#252424'
                              }}
                              to={`/category/${name}`}
                              onClick={()=>fetchSomeCatData(id)}>
                              {name}
                          </NavFixedItem_LINK>
                      </LIFixed>

                  )}
                  <LIFixed>
                      <NavFixedItem_LINK to='/more/cats' onClick={()=>fetchMoreCatData(15)}>10 more photos</NavFixedItem_LINK>
                  </LIFixed>
              </>
            </ULFixed>
            : null
        }

      <FixedRoutesCont className='routesCont'>
        <Switch>
          <Route exact path='/' render={()=>
              <div>
                  <h1>Choose one of these categories</h1>
              </div>
          }/>
            {cats.length && <Route path='/category/:category'>
                <CatsImages photos={cats}/>
            </Route>}
            {moreCats.length && <Route>
                <CatsImages photos={moreCats}/>
            </Route>}
        </Switch>
      </FixedRoutesCont>
    </FixedMainDiv>
  );
}
