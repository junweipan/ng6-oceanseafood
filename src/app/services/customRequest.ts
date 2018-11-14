import { Injectable } from '@angular/core';
import { BaseRequestOptions, Headers } from '@angular/http';

@Injectable()
export class CustomRequest extends BaseRequestOptions {
  headers = new Headers({
    'Cache-Control': 'public, max-age=31536000',
    'Expires': 'Wed, 21 Oct 2025 07:28:00 GMT'
  });
}
