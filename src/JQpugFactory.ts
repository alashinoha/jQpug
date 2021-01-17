import JQpugPugFactory from "./JQpugPugFactory";
import jQpugOptionsBuilder, {JQpugOptionsBuilderOptions} from "./JQpugOptionsBuilder";

class JQpugFactoryClass {

    create(pug: string, options?: JQpugOptionsBuilderOptions): JQuery {
        const $elem = JQpugPugFactory.create(pug);
        if (options !== undefined) {
            jQpugOptionsBuilder.build($elem, options);
        }
        return $elem;
    }

}

const JQpugFactory = new JQpugFactoryClass();

export default JQpugFactory;
