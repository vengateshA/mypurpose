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
    marginBottom: 10,
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
  },
  tableRow: { 
    flexDirection: 'row',
  },
  tableCell: {
    width: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
  },
});

const Practice2 = ({ datas, second }) => {
  return (
    <div>
      <PDFDownloadLink document={<MyDocument data={datas} sec ={second} />} fileName="report.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Generating PDF...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

// Define the structure and content of the PDF
const MyDocument = ({ data, sec }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{data.mac_info_id}</Text>
            {/* <Text style={styles.tableCell}>Device ID</Text>
            <Text style={styles.tableCell}>Status</Text>
            <Text style={styles.tableCell}>Location</Text> */}
            <Text style={styles.tableCell}>Empty Cage</Text>
            <Text style={styles.tableCell}>Loaded Cage</Text>
            <Text style={styles.tableCell}>Number of Chickens</Text>
            <Text style={styles.tableCell}>Number of Cages</Text>
            {/* <Text style={styles.tableCell}>Date and Time</Text> */}
            <Text style={styles.tableCell}>Mac ID</Text>
            <Text style={styles.tableCell}>ID</Text>
          </View>
          {data.map((data) => (
            <TableRow key={data.mac_info_id} data={data} />
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

const TableRow = ({ data, sec }) => (
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>{data.mac_info_id}</Text>
    {/* <Text style={styles.tableCell}>{data.device_id}</Text>
    <Text style={styles.tableCell}>{data.status}</Text>
    <Text style={styles.tableCell}>{data.location}</Text> */}
    <Text style={styles.tableCell}>{data.empty_cage}</Text>
    <Text style={styles.tableCell}>{data.loaded_cage}</Text>
    <Text style={styles.tableCell}>{data.num_chicken}</Text>
    <Text style={styles.tableCell}>{data.num_cages}</Text>
    {/* <Text style={styles.tableCell}>{data.dateandtime}</Text> */}
    <Text style={styles.tableCell}>{data.mac_id}</Text>
    <Text style={styles.tableCell}>{data.id}</Text>
  </View>
);

export default Practice2;
