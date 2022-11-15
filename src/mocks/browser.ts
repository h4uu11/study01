import {setupWorker} from "msw"
import handlers from "./handlers.js"

export const worker = setupWorker(...handlers) // worker: 가짜 서버
