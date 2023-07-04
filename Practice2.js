import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Define the styles for the PDF
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 20,
  },
  section: {
    marginBottom: 50,
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'ridge',
    borderWidth: 1,
    borderColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  },
});

const Practice2 = ({ filtertotal, filterdata }) => {
  console.log(filtertotal , 'its me')
  return (
    <div>
      <PDFDownloadLink document={<MyDocument data={filtertotal} sec={filterdata} />} fileName="report.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Generating PDF...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

const MyDocument = ({ data, sec }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>drivername</Text>
            <Text style={styles.tableCell}>Truck_number</Text>
            <Text style={styles.tableCell}>Farm_incharge</Text>
            <Text style={styles.tableCell}>Customer name</Text>
            <Text style={styles.tableCell}>Customer number</Text>
            <Text style={styles.tableCell}>Date</Text>
            <Text style={styles.tableCell}>Time</Text>
          </View>
          {data.map((data) => (
            <TableRow data={data} />
          ))}
          {/* <TableRowAdd data={data} /> */}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>total weight(empty)</Text>
            <Text style={styles.tableCell}>total weight(loaded)</Text>
            <Text style={styles.tableCell}>Chicken weight</Text>
            <Text style={styles.tableCell}>number of chicken</Text>
            <Text style={styles.tableCell}>number of empty cage</Text>
            <Text style={styles.tableCell}>number of loaded cage</Text>
            <Text style={styles.tableCell}>balance cage</Text>

          </View>
          {data.map((data) => (
            <TableRowsecond data={data} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>empty cage</Text>
            <Text style={styles.tableCell}>Loaded cage</Text>
            <Text style={styles.tableCell}>chicken</Text>
            <Text style={styles.tableCell}>cages</Text>
          </View>
          {sec.map((sec) => (
            <TableRowthird sec={sec} />
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

const TableRow = ({ data}) => (
  <View style={styles.tableRow}>

    <Text style={styles.tableCell}>{data.driver_name}</Text>
    <Text style={styles.tableCell}>{data.truck_number}</Text>
    <Text style={styles.tableCell}>{data.farm_supervisior}</Text>
    <Text style={styles.tableCell}>{data.trader_name}</Text>
    <Text style={styles.tableCell}>{data.trader_number}</Text>
    <Text style={styles.tableCell}>{data.date}</Text>
    <Text style={styles.tableCell}>{data.time}</Text>

  </View>
);

const TableRowsecond = ({ data}) => (
  <View style={styles.tableRow}>

    <Text style={styles.tableCell}>{data['total_empty_cage']}</Text>
    <Text style={styles.tableCell}>{data['total_loaded_cage']}</Text>
    <Text style={styles.tableCell}>{data['total_empty_cage']-data['total_loaded_cage']}</Text>
    <Text style={styles.tableCell}>{data['num_chicken']}</Text>
    <Text style={styles.tableCell}>{data['total_num_empty']}</Text>
    <Text style={styles.tableCell}>{data['total_num_loaded']}</Text>
    <Text style={styles.tableCell}>{data['total_num_empty']-data['total_num_loaded']}</Text>


  </View>
);


const TableRowthird = ({ sec }) => (
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>{sec.empty_cage}</Text>
    <Text style={styles.tableCell}>{sec.loaded_cage}</Text>
    <Text style={styles.tableCell}>{sec.num_chicken}</Text>
    <Text style={styles.tableCell}>{sec.num_cages}</Text>
    {/* Add more cells for other properties */}
  </View>
);


export default Practice2;