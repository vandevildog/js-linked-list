/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
    let head = null;
    let tail = null;
  
    const getHead = function(){
      return head;
    };
    const getTail = function(){
      return tail;
    };
  
    const add = function(val){
      let newNode = {};
      newNode.value = val;
      newNode.next = null;
  
      if (head) {
        tail.next = newNode;
        tail = newNode;
      }
  
      if (!head) {
        head = newNode;
        tail = newNode;
      }
  
      linkedList = head;
  
      return head;
    };
  
    const get = function(index){
      let curObj = head;
  
      let i = 0;
      while (i < index && curObj !== null) {
        curObj = curObj.next;
        i++;
      }
  
      if (curObj === null) {
        return false;
      }
  
      return curObj;
    };
  
    const remove = function(index){

      if (get(index) === false) {
        return false;
      }

      if (index === 0) {
        head = head.next;
      }
  
      let NodeToRedirect = get(index - 1);
      let NodeToRemove = get(index);
      NodeToRedirect.next = NodeToRemove.next;
  

      if (NodeToRemove.next === null) {
        tail = NodeToRedirect;
      }
    };
  
    const insert = function(val, index){

      if (index < 0) {
        return false;
      }
      if (get(index) === false && get(index - 1) === false) {
        return false;
      }
    
      let newNode = {};
      newNode.value = val;
    
      if (index === 0) {
        newNode.next = head;
        head = newNode;
      }
    
      let frontNode = get(index - 1);
      let backNode = get(index);
      if (index > 0 && backNode !== false) {
        newNode.next = backNode;
        frontNode.next = newNode;
      }
     if (backNode === false && frontNode === tail) {
        add(val);
      }
    };
  
    return {
      getHead: getHead,
      getTail: getTail,
      add: add,
      remove: remove,
      get: get,
      insert: insert
    };
  }