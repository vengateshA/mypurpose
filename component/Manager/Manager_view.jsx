import React from 'react';
import { Outlet } from 'react-router-dom';
import Manager_actions from './Manager_actions';

function Manager_view() {
    return (
        <div>     
         <div> 
            <Manager_actions/>
         </div>
        </div>
    );
} 
export default Manager_view; 

   