import { Directive, Renderer2, ElementRef,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.open') isOpen = false;
  constructor(private  r2: Renderer2, private elRef:ElementRef ){

 }
 @HostListener('click') toggleOpen(){
   this.isOpen = ! this.isOpen;
 }
}
