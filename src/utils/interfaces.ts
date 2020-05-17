export interface DocumentInput {
  _id: string;
}
export interface CameraInput {
  source: string;
  target: string;
  name: string;
  width?: number;
  height?: number;
  bitrate?: number;
  rebroadcast?: boolean;
  thumbnails?: boolean;
  recording?: boolean;
  _id: string;
}
export interface CameraBase extends CameraInput, DocumentInput {}
export interface CameraOutput extends CameraBase {}
export interface RebroadcastParams {
  url: string;
  token: string;
  stream: string;
}
export interface RebroadcastParamsResponse {
  params: RebroadcastParams;
}
export interface CreateCameraRequest {
  camera: CameraInput;
}
export interface GetCamerasResponse {
  cameras: CameraOutput[];
}
export interface GetCameraResponse {
  camera: CameraOutput;
}
export interface UpdateCameraRequest
  extends CreateCameraRequest,
    DocumentInput {}
