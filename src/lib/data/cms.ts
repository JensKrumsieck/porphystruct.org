import fs from 'fs';
import path from 'path';

export function getContent(postType, fileName) {
    try {
        return fs.readFileSync(
            path.resolve(path.join(path.dirname(''), `content/${postType}/`), `${fileName}.md`),
            'utf-8'
        );
    } catch (e) {
        if (e.code == 'ENOENT') {
            return false;
        }
        return [];
    }
}

export function getAllContent(postType){
    const content = fs.readdirSync(path.join(path.dirname(''), `content/${postType}/`))
    return content;
}

export function getAuthor(name) {
    return getSingleRelation("authors", "name", name);
}

export function getTagName(id) {
    return getSingleRelation("tags", "id", id).name;
}

export function getCategoryName(id) {
    return getSingleRelation("categories", "id", id).name;
}

export function getCatgories() { return getRelation("categories"); }

function getSingleRelation(relationName, fieldName, value) {
    var relations = getRelation(relationName);
    return relations.filter(s => s[fieldName] == value)[0];
}

function getRelation(name) {
    let rawdata = fs.readFileSync(path.resolve(path.join(path.dirname(''), `content/${name}.json`)), "utf-8");
    let data = JSON.parse(rawdata);
    return data[name];
}

export const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
