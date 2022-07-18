import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar, Edit } from '@syncfusion/ej2-react-grids'


import {employeesData, employeesGrid} from '../data/dummy';
import {Header} from '../components'

const Employees = () => {

  const editing ={allowDeleting: true, allowEditing: true}


  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category="Page" title="Orders"/>
    
    <GridComponent id="gridcomp" dataSource={employeesData} allowPaging allowSorting toolbar={['Search', 'Add', 'Edit', 'Delete']} width="auto" editSettings={editing}>
      <ColumnsDirective>
      {employeesGrid.map((item, index) => (
        <ColumnDirective key={index} {...item} />
      ))}
      </ColumnsDirective>
      <Inject services={[Page, Search, Toolbar,Edit]} />
    </GridComponent>
  </div>
  )
}

export default Employees