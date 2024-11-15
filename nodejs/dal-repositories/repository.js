const autoBind = require('auto-bind');
const db = require('./db.js');

class Repository {

    constructor(model) {
        this.model = model;
        autoBind(this);
        db.connect();
    }

    async getAll(query) {
        try {
            return await this.model.find(query);
        }
        catch (error) {
            console.log(error);
            throw Error('error getting the list of data');
        }
        // let { skip, limit, sortBy } = query;

        // skip = skip ? Number( skip ) : 0;
        // limit = limit ? Number( limit ) : 10;
        // sortBy = sortBy ? sortBy : { 'createdAt': -1 };

        // delete query.skip;
        // delete query.limit;
        // delete query.sortBy;

        // if ( query._id ) {
        //     try {
        //         query._id = new mongoose.mongo.ObjectId( query._id );
        //     } catch ( error ) {
        //         throw new Error( 'Not able to generate mongoose id with content' );
        //     }
        // }

        // try {
        //     const items = await this.model
        //             .find( query )
        //             .sort( sortBy )
        //             .skip( skip )
        //             .limit( limit ),

        //         total = await this.model.countDocuments( query );

        //     return new HttpResponse( items, { 'totalCount': total } );
        // } catch ( errors ) {
        //     throw errors;
        // }
    }

    async get(id) {
        try {
            const item = await this.model.findById(id);
            
            if (!item) {
                const error = new Error('Item not found');
                error.statusCode = 404;
                throw error;
            }
            //return new HttpResponse(item);
            return await item;
        } catch (errors) {
            throw errors;
        }
    }

    async insert(data) {
        try {
            const item = await this.model.create(data);
            if (item) {
                return await item;
            }
            throw new Error('Something wrong happened');
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const item = await this.model.findByIdAndUpdate(id, data, { 'new': true });
            return await item;
        } catch (errors) {
            throw errors;
        }
    }

    async delete(id) {
        try {
            const item = await this.model.findByIdAndDelete(id);
            if (!item) {
                const error = new Error('Item not found');
                error.statusCode = 404;
                throw error;
            } else {
                return await item, { 'deleted': true };
            }
        } catch (errors) {
            throw errors;
        }
    }
}

module.exports = Repository;
