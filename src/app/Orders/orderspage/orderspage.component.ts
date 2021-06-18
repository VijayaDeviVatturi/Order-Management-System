import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTable , MatDialog} from '@angular/material';
import { DialogBoxComponent } from 'src/app/dialog-box/dialog-box.component';

export interface UsersData {
  Customerbuyername: string;
  OrderNumber: number;
  CustomerAddress:string;
  CustomerPhone:number;
  OrderTotal:number;
  OrderDueDate:string;
}
const ELEMENT_DATA: UsersData[] = [
  {OrderNumber: 1560608769632,OrderDueDate:'15-Sep-2018', Customerbuyername: 'Vijayadevi', CustomerAddress:'India',CustomerPhone:9123456780,OrderTotal:2000},
  {OrderNumber: 1560608796014,OrderDueDate:'6-March-2018', Customerbuyername: 'Devi',CustomerAddress:'US',CustomerPhone:9012345678,OrderTotal:1000},
  
];
@Component({
  selector: 'app-orderspage',
  templateUrl: './orderspage.component.html',
  styleUrls: ['./orderspage.component.css']
})
export class OrderspageComponent implements OnInit {
  displayedColumns: string[] = ['OrderNumber', 'OrderDueDate','Customerbuyername', 'CustomerAddress','CustomerPhone','OrderTotal','action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(public dialog: MatDialog) { }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      OrderNumber:d.getTime(),
      Customerbuyername:row_obj.Customerbuyername,
      CustomerAddress:row_obj.CustomerAddress,
      CustomerPhone:row_obj.CustomerPhone,
      OrderTotal:row_obj.OrderTotal,
      OrderDueDate:row_obj.OrderDueDate
      
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.OrderNumber == row_obj.OrderNumber){
        value.OrderNumber=row_obj.OrderNumber,
        value.Customerbuyername = row_obj.Customerbuyername;
        value.CustomerAddress = row_obj.CustomerAddress;
        value.CustomerPhone = row_obj.CustomerPhone;
        value.OrderTotal = row_obj.OrderTotal;
        value.OrderDueDate=row_obj.OrderDueDate
        

      }
      return true;
    });
  }
  
  deleteRowData(row_obj){
   
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.OrderNumber != row_obj.OrderNumber;
    });
  
  }
  ngOnInit() {
  }
}
  


