import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImgUploadService {
  constructor(private http: HttpClient) {}

  imgUpload(data: any) {
    const formData = new FormData();
    formData.append('file', data);
    formData.append('upload_preset', 'yulajclu');

    return this.http.post(
      'https://api.cloudinary.com/v1_1/dicr1o8il/upload',
      formData,
      { headers: { skip: 'true' } }
    );
  }
}
