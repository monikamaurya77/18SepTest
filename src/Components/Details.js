
const Details = (props) => {
    return(
        <div className="margin-left">
            
            <table>
                <thead>
                <tr className="table">
                    <td>Property</td>
                    <td>Move in Date</td>
                    <td>Rent</td>
                    <td>Deposite</td>
                    <td>Status </td>
                </tr>
                </thead>

                <tbody>
                <tr>
                <td>Lost Round</td>
                    <td>21 February 2020</td>
                    <td>$3000</td>
                    <td>$9000</td>
                    <td>Awating bank processing &nbsp;&emsp; </td>
                    <td className={`${props.yl}`}>  </td>
                </tr>
                <tr>
                    <td>1491 jagged Arbor</td>
                    <td>12 March 2020</td>
                    <td>$2300</td>
                    <td>$4800</td>
                    <td>paid&nbsp;&emsp; </td>
                    <td className={`${props.gr}`}>  </td>
                </tr>
                </tbody>
            </table>
            <button>Submitted</button>
        </div>
    )
}
export default Details;