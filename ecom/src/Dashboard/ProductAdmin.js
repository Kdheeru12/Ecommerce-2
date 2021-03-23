import React,{useState} from 'react'
import { Fragment } from 'react';
import Wraper from '../components/Wraper';
import Datatable from './Database';

export default function ProductAdmin() {
    return (
        <Fragment>
            <Wraper title='ProductList' />
            <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>Products Category</h5>
                        </div>
                        <div className="card-body">

                            <div className="clearfix"></div>
                            <div id="basicScenario" className="product-physical">
                                <Datatable
                                    multiSelectOption={false}
                                    myData={
                                        [
                                            {
                                                image: <img src={''} style={{width:50,height:50}}/>,
                                                product_name: "Headphones",
                                                price: "$20.00",
                                                status: <i className="fa fa-circle font-warning f-12" />,
                                                category: "Electronics"
                                            },
                                              {
                                                image: <img src={''} style={{width:50,height:50}} />,
                                                product_name: "Honor Mobile",
                                                price: "$462.00",
                                                status: <i className="fa fa-circle font-danger f-12" />,
                                                category: "Electronics"
                                            },
                                        ]
                                    } 
                                    pageSize={10} 
                                    pagination={true}
                                    class="-striped -highlight" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        </Fragment>
    )
}
