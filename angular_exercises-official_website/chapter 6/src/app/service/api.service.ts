import { HttpHeaders } from '@angular/common/http';

export class ApiService {

    getUrl(): string {
        return 'http://localhost:3000';
    }

    getHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json'});
    }
}
