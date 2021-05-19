import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class alert {

    constructor(private toastr: ToastrService) {}

    success(message) {
        this.toastr.show(
            `<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> 
            <div class="alert-text"</div> <span class="alert-title" data-notify="title">¡Exíto!</span> 
            <span data-notify="message">${message}</span></div>`,
            '',
            {
              timeOut: 8000,
              closeButton: true,
              enableHtml: true,
              tapToDismiss: false,
              titleClass: 'alert-title',
              positionClass: 'toast-top-right',
              toastClass: "ngx-toastr alert alert-dismissible alert-success alert-notify",
            }
        );
    }

    error(message) {
        this.toastr.show(
            `<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> 
            <div class="alert-text"</div> <span class="alert-title" data-notify="title">Upps tenemos problemas</span> 
            <span data-notify="message">${message}</span></div>`,
            '',
            {
              timeOut: 8000,
              closeButton: true,
              enableHtml: true,
              tapToDismiss: false,
              titleClass: 'alert-title',
              positionClass: 'toast-top-center',
              toastClass: "ngx-toastr alert alert-dismissible alert-danger alert-notify",
            }
          );
    }

    information(message) {
      this.toastr.show(
          `<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> 
          <div class="alert-text"</div> <span class="alert-title" data-notify="title">Información de interes.</span> 
          <span data-notify="message">${message}</span></div>`,
          '',
          {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            tapToDismiss: false,
            titleClass: 'alert-title',
            positionClass: 'toast-top-center',
            toastClass: "ngx-toastr alert alert-dismissible alert-warning alert-notify",
          }
        );
  }

  errorSmall(message) {
    this.toastr.show(
        `<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> 
        <div class="alert-text"</div> <span class="alert-title" data-notify="title">Upps tenemos problemas</span> 
        <span data-notify="message">${message}</span></div>`,
        '',
        {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: 'alert-title',
          positionClass: 'toast-top-right',
          toastClass: "ngx-toastr alert alert-dismissible alert-danger alert-notify",
        }
    );
}
}