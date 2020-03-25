import React from 'react';
import Table from 'react-bootstrap/Table'

const Specifications = (props) => {
    const {specifications} = props;
    console.log(specifications)    
    return (
        <div className='specifications'>
            <Table responsive>
                <thead>
                    <h3>Specifications</h3>
                </thead>
                <tbody>
                    {specifications.map(spec=> (
                        <tr>
                            <th>{spec.Spec}</th>
                            <td>{spec.Value}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Specifications;