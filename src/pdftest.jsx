import pdfMake from "pdfmake/build/pdfmake"; 
import pdfFonts from "pdfmake/build/vfs_fonts"; 
pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  THSarabunNew: {
    normal: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew-webfont.ttf',
    bold: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf',
    italics: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_italic-webfont.ttf',
    bolditalics: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bolditalic-webfont.ttf'
  },
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  },
  Kanit: {
    normal: 'https://cdn.jsdelivr.net/npm/@expo-google-fonts/kanit@0.2.2/Kanit_400Regular.ttf',
    bold: 'https://cdn.jsdelivr.net/npm/@expo-google-fonts/kanit@0.2.2/Kanit_500Medium.ttf',
    italics: 'https://cdn.jsdelivr.net/npm/@expo-google-fonts/kanit@0.2.2/Kanit_900Black_Italic.ttf',
    bolditalics: 'https://cdn.jsdelivr.net/npm/@expo-google-fonts/kanit@0.2.2/Kanit_700Bold_Italic.ttf'
  }
}

const PdfGen = () => {
  var orderNo = "63511987041870";

  var docDefinition1 = {
    pageSize: {
      width: 283,
      height: 447
    },
    pageMargins: [ 5, 3, 5, 7 ],
    content: [
      {
        style: 'tableExample',
        table: {
          widths: [135, 'auto', 'auto'],
          body: [
            [ {
              colSpan: 2,
              border: [false, false, false, false],
              text:'Order: 6351-191870-8406',
              fontSize: 10,
              bold: true,
              lineHeight: 0.7
            }, '' 
            ,{
              rowSpan: 2,
              qr: orderNo, 
              fit: 120*0.55,
            }],
            [ {
              colSpan: 2,
              text:'ส่ง Kerry Express [COD]',
              fontSize: 10,
              bold: true,
              lineHeight: 0.7
            }, '', ''],
          ]
        },
        layout: 'noBorders'
      },
      {
        table: {
          widths: [103, 150], 
          heights: 5,
          body: [
            [ {
              text:'COD',
              fontSize: 11,
              bold: true,
              fillColor: '#000000',
              color: '#ffffff',
              alignment: 'left',
              lineHeight: 0.6,
            }, {
              text:'THB28950',
              fontSize: 11,
              bold: true,
              fillColor: '#000000',
              color: '#ffffff',
              alignment: 'right',
              lineHeight: 0.6
            }
          ],
            [{
              colSpan: 2,
              text:'เก็บเงินปลายทาง',
              fontSize: 11,
              bold: true,
              fillColor: '#000000',
              color: '#ffffff',
              alignment: 'left',
              lineHeight: 0.7
            }]
          ]
        },
        defaultBorder: false,
      },
      {
        style: 'tableExample',
        table: {
          widths: ['auto', 'auto', 'auto'],
          body: [
            [ {
              colSpan: 3,
              border: [false, false, false, false],
              text:'ผู้ส่ง : BB IT2',
              fontSize: 9,
              bold: true,
              lineHeight: 0.75
            }, '', ''],
            [ {colSpan: 3,
              border: [false, false, false, false],
              text:'35/105 ซอยวัดกำแพง ถนนพิบูลสงคราม ตำบล สวนใหญ่ อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 12000',
              fontSize: 9,
              lineHeight: 0.75
            }, '', ''],
            [ {
              colSpan: 3,
              border: [false, false, false, false],
              text:'Phone : 0865514015',
              fontSize: 9,
              bold: true,
              lineHeight: 0.75
            }, '', ''],
          ]
        },
        defaultBorder: false,
      },
      {
        table: {
          widths: [150, 'auto', 'auto'],
          body: [
            [ {
              colSpan: 3,
              border: [true, true, true, false],
              text:'ผู้รับ : BB IT2',
              fontSize: 10,
              bold: true,
              lineHeight: 0.75
            }, '', ''],
            [ {colSpan: 3,
              border: [true, false, true, false],
              text:'35/105 ซอยวัดกำแพง ถนนพิบูลสงคราม ตำบล สวนใหญ่ อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 12000',
              fontSize: 10,
              lineHeight: 0.6
            }, '', ''],
            [ {
              colSpan: 3,
              border: [true, false, true, true],
              text:'Phone : 0845214242',
              fontSize: 10,
              bold: true,
              lineHeight: 0.75
            }, '', ''],
            [ {
              colSpan: 3,
              border: [false, false, false, false],
              text:'รายการสินค้า',
              fontSize: 10,
              bold: true,
              lineHeight: 0.7
            }, '', ''],
            [ {
              colSpan: 3,
              border: [false, false, false, false],
              text:'1 X ผ้าขนหนู',
              fontSize: 10,
              lineHeight: 0.7
            }, '', ''],
          ]
        },
        defaultBorder: false,
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 0, 0, 5]
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
      font: "THSarabunNew",
    },
  };

  var docDefinition2 = {
    pageSize: {
      width: 283,
      height: 447
    },
    pageMargins: [ 5, 3, 5, 7 ],
    content: [
      {
        style: 'tableExample',
        table: {
          widths: [135, 'auto', 'auto'],
          body: [
            [ {
              colSpan: 2,
              border: [false, false, false, false],
              text:'Order: 6351-191870-8406',
              fontSize: 10,
              bold: true,
              lineHeight: 0.7
            }, '' 
            ,{
              rowSpan: 2,
              qr: orderNo, 
              fit: 120*0.55,
            }],
            [ {
              colSpan: 2,
              text:'ส่ง Kerry Express [COD]',
              fontSize: 10,
              bold: true,
              lineHeight: 0.7
            }, '', ''],
          ]
        },
        layout: 'noBorders'
      },
      {
        table: {
          widths: [70, 'auto', 120], 
          heights: 5,
          body: [
            [ {
              text:'COD',
              fontSize: 11,
              bold: true,
              fillColor: '#000000',
              color: '#ffffff',
              alignment: 'left',
              lineHeight: 0.6,
            }, {
              text:'THB28950',
              fontSize: 11,
              bold: true,
              fillColor: '#000000',
              color: '#ffffff',
              alignment: 'right',
              lineHeight: 0.6
            }
            , {
              text:'เก็บเงินปลายทาง',
              fontSize: 11,
              bold: true,
              fillColor: '#000000',
              color: '#ffffff',
              alignment: 'right',
            }
          ]
          ]
        },
        defaultBorder: false,
      },
      {
        style: 'tableExample',
        table: {
          widths: ['auto', 'auto', 'auto'],
          body: [
            [ {
              colSpan: 3,
              border: [false, false, false, false],
              text:'ผู้ส่ง : BB IT2',
              fontSize: 9,
              bold: true,
              lineHeight: 0.75
            }, '', ''],
            [ {colSpan: 3,
              border: [false, false, false, false],
              text:'35/105 ซอยวัดกำแพง ถนนพิบูลสงคราม ตำบล สวนใหญ่ อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 12000',
              fontSize: 9,
              lineHeight: 0.75
            }, '', ''],
            [ {
              colSpan: 3,
              border: [false, false, false, false],
              text:'Phone : 0865514015',
              fontSize: 9,
              bold: true,
              lineHeight: 0.75
            }, '', ''],
          ]
        },
        defaultBorder: false,
      },
      {
        table: {
          widths: [150, 'auto', 'auto'],
          body: [
            [ {
              colSpan: 3,
              border: [true, true, true, false],
              text:'ผู้รับ : BB IT2',
              fontSize: 10,
              bold: true,
              lineHeight: 0.75
            }, '', ''],
            [ {colSpan: 3,
              border: [true, false, true, false],
              text:'35/105 ซอยวัดกำแพง ถนนพิบูลสงคราม ตำบล สวนใหญ่ อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 12000',
              fontSize: 10,
              lineHeight: 0.6
            }, '', ''],
            [ {
              colSpan: 3,
              border: [true, false, true, true],
              text:'Phone : 0845214242',
              fontSize: 10,
              bold: true,
              lineHeight: 0.75
            }, '', ''],
            [ {
              colSpan: 3,
              border: [false, false, false, false],
              text:'รายการสินค้า',
              fontSize: 10,
              bold: true,
              lineHeight: 0.7
            }, '', ''],
            [ {
              colSpan: 3,
              border: [false, false, false, false],
              text:'1 X ผ้าขนหนู',
              fontSize: 10,
              lineHeight: 0.7
            }, '', ''],
          ]
        },
        defaultBorder: false,
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 0, 0, 5]
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
      font: "THSarabunNew",
    },
  };

  var pdfTh1 = pdfMake.createPdf(docDefinition1);
  var pdfTh2 = pdfMake.createPdf(docDefinition2);

  return (
    <div>
      <button
        onClick={() => {
          pdfTh1.open();
          pdfTh2.open();
        }}
      >
        Export PDF
      </button>
    </div>
  );
};

export default PdfGen;
