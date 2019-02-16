import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') dropdown = false;

    @HostListener('click')
    onMouseClick() {
        this.dropdown = !this.dropdown
    }
}