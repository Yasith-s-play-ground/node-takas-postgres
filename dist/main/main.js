import { ExpressApp } from "./app/config/core.config.js";
import { AppModule } from "./app/app.module.js";
function bootstrap() {
    const app = ExpressApp.create(AppModule);
    app.listen(5050, () => {
        console.log('Server is listening at 5050');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map