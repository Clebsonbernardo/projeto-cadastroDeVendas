
function DataTable() {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Clebson Bernardo</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>10/05/2021</td>
                        <td>Gabriel da Silva Velho</td>
                        <td>3</td>
                        <td>1</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>12/08/2021</td>
                        <td>Rosileia Albano</td>
                        <td>2</td>
                        <td>7</td>
                        <td>28017.00</td>
                    </tr>
                    <tr>
                        <td>20/08/2021</td>
                        <td>Alexsoner Batista</td>
                        <td>10</td>
                        <td>2</td>
                        <td>11017.00</td>
                    </tr>
                    <tr>
                        <td>28/11/2021</td>
                        <td>Mateus</td>
                        <td>18</td>
                        <td>5</td>
                        <td>9017.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;