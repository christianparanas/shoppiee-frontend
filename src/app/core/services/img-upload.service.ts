import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgUploadService {

  constructor(private http: HttpClient) { }

  imgUpload(data: any) {
    return this.http.post("https://api.cloudinary.com/v1_1/dicr1o8il/upload", data, {headers: {skip:"true"}});
  }

}
