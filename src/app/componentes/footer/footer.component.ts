import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { FooterService } from 'src/app/servicios/footer.service';
import { Footer } from './footer';


@Component({
selector: 'app-footer',
templateUrl: './footer.component.html',
styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

footer: Footer = new Footer();
footers: Footer[] = [];
displayForm: boolean = true;
displayUpdateForm: boolean = false;
displayDeleteForm:boolean = false;
postId: any;
loading = false;


constructor(private footerService:FooterService, private router:Router, private activatedRoute:ActivatedRoute, private http: HttpClient, public autenticaticionService: AutenticacionService) { }

createFooter():void {
    this.loading = true;
this.footerService.create(this.footer).subscribe(
data => {
this.footers.push(data);
this.footer = new Footer();
this.displayForm = false;
setTimeout(() => {
    location.reload();
}, 5000);
}
);
}

cargar(footer: Footer):void{
    var footerToUpdate=footer;
    this.footerService.update(footer.id,footer.email,footer.nombre,footer.asunto, footerToUpdate).subscribe(
        data => this.postId = data.id)
    this.displayUpdateForm = false;
}

deleteFooter(footer: Footer):void {
    this.loading = true;
this.footerService.delete(footer.id).subscribe(
data => {
this.footers = this.footers.filter(e => e !== footer);
this.displayDeleteForm = false;
}
);
setTimeout(() => {
    location.reload();
}, 5000);
}


ngOnInit(): void {
this.footerService.getAll().subscribe(
data => {
this.footers = data;
}
);
}
}