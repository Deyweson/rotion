import { Route, Router } from "electron-router-dom";
import { Blank } from "./pages/blank";
import { Document } from "./pages/document";


export function Routes(){
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Blank/>} />
          <Route path="/" element={<Document/>} />
        </>
      }
    />
  )
}