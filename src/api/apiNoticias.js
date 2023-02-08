import React from 'react';

export async function apiNoticias(url){
  const response= await fetch(url);
  const rta =await response.json();
  return rta
}
export async function apiClima(url){
  const response= await fetch(url);
  const rta =await response.json();
  return rta
}
