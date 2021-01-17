import JQpugPugFactory, {JQpugPugFactoryClass} from "./JQpugPugFactory";
import jQpugOptionsBuilder, {EnableContentType} from "./JQpugOptionsBuilder";

class JQpugFactoryClass {

    create(pug: string, options: EnableContentType = undefined): JQuery {
        const $elem = JQpugPugFactory.create(pug);
        if (options !== undefined) {
            jQpugOptionsBuilder.build($elem, options);
        }
        return $elem;
    }

}

const JQpugFactory = new JQpugFactoryClass();

export default JQpugFactory;
