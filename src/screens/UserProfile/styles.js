const styles = {
  container: {
    backgroundColor: 'purple',
    width: '100%',
    height: '100vh',
  },
  box: {
    display: 'flex',
    border: '5px solid black',
    alignItems: 'center',
    margin: '2em',
    padding: 5
  },
  text: {
    color: 'white',
    paddingRight: '10px',
  },
  symbolButton: {
    border: 'none',
    padding: "10px 20px",
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '15px',
    cursor: 'pointer',
  },
  tableContainer: {
    margin: '2em',
    border: 'solid black'
  },
  tableHeadersContainer: {
    backgroundColor: '#888AAA'
  },
  tableHeaders: {
    padding: 10,
    width: 100,
    border: 'solid black',
    textAlign: 'start'
  },
  tableData: {
    padding: 10,
    border: 'solid black'
  },
  deleteButton: {
    textAlign: 'center',
    color: 'blue',
    cursor: 'pointer'
  }
}

export default styles