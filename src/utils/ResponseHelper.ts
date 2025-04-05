import { Response } from 'express';

export class ResponseHelper {
  static sendOk(res: Response, data: any) {
    return res.status(200).json({ success: true, data });
  }

  static sendCreated(res: Response, data: any) {
    return res.status(201).json({ success: true, data });
  }

  static sendBadRequest(res: Response, message: string = 'Bad Request', error?: any) {
    return res.status(400).json({ success: false, message, error });
  }

  static sendUnauthorized(res: Response, message: string = 'Unauthorized', error?: any) {
    return res.status(401).json({ success: false, message, error });
  }

  static sendForbidden(res: Response, message: string = 'Forbidden', error?: any) {
    return res.status(403).json({ success: false, message, error });
  }

  static sendNotFound(res: Response, message: string = 'Not Found', error?: any) {
    return res.status(404).json({ success: false, message, error });
  }

  static sendInternalServerError(
    res: Response,
    message: string = 'Internal Server Error',
    error?: any,
  ) {
    return res.status(500).json({ success: false, message, error });
  }
}
